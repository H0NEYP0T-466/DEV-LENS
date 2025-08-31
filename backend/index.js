const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow only your frontend origin
const FRONTEND_ORIGIN = 'https://dev-lens-mu.vercel.app';

// CORS: add ACAO/ACAC headers and auto-handle preflight
const corsOptions = {
  origin: FRONTEND_ORIGIN,                  // exact origin for Vercel app
  methods: ['GET', 'POST', 'OPTIONS'],      // allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'], // allow these headers
  credentials: true,                        // include Access-Control-Allow-Credentials
  optionsSuccessStatus: 204,                // 204 is standard for preflight
};
app.use(cors(corsOptions));                 // must be before routes

// If any OPTIONS slips through (Express 5 + routers), answer it here.
// No wildcard route patterns (like "*") to avoid path-to-regexp errors.
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', FRONTEND_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());                    // parse JSON bodies

// Simple request log to see what actually hits the server
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check (for Railway)
app.get('/health', (_req, res) => res.status(200).send('OK'));

// Optional GET /review to verify routing in a browser
app.get('/review', (_req, res) => {
  res.status(200).json({ ok: true, info: 'Use POST /review from the frontend' });
});

// POST /review — make sure controller exports a function (req, res) => { ... }
const generateRES = require('./controller/controller.js');
app.post('/review', generateRES);

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// Start server on Railway PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. CORS origin: ${FRONTEND_ORIGIN}`);
});