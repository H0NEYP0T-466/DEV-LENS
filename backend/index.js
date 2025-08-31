const express = require('express');
require('dotenv').config();

const app = express();
app.set('trust proxy', 1); // behind Railway proxy

// Your Vercel frontend origin
const FRONTEND_ORIGIN = 'https://dev-lens-mu.vercel.app';

// CORS: add headers to every response and handle preflight cleanly
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', FRONTEND_ORIGIN);        // allow your frontend
  res.header('Vary', 'Origin');                                      // proper caching
  res.header('Access-Control-Allow-Credentials', 'true');            // allow credentials if needed
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');    // allowed methods
  res.header(
    'Access-Control-Allow-Headers',
    req.header('Access-Control-Request-Headers') || 'Content-Type, Authorization'
  );
  if (req.method === 'OPTIONS') return res.sendStatus(204);          // preflight response
  next();
});

app.use(express.json()); // JSON body parser

// Simple logger to see what hits the server
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} origin=${req.headers.origin || '-'}`);
  next();
});

// Health check
app.get('/health', (_req, res) => res.status(200).send('OK'));

// Optional GET to verify path in a browser
app.get('/review', (_req, res) => {
  res.status(200).json({ ok: true, info: 'Use POST /review from the frontend' });
});

// POST /review — your controller must export (req, res) => { ... }
const generateRES = require('./controller/controller.js');
app.post('/review', async (req, res) => {
  try {
    await generateRES(req, res);
  } catch (err) {
    console.error('POST /review error:', err);
    if (!res.headersSent) res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}. CORS origin: ${FRONTEND_ORIGIN}`));