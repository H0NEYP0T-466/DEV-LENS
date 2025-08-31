const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// The only origin that must be allowed (your Vercel frontend)
const FRONTEND_ORIGIN = 'https://dev-lens-mu.vercel.app';

// CORS config: add ACAO/ACAC on simple requests and preflight
const corsOptions = {
  origin: FRONTEND_ORIGIN,                      // reflect exact origin
  methods: ['GET', 'POST', 'OPTIONS'],          // allow these methods
  allowedHeaders: ['Content-Type', 'Authorization'], // headers frontend sends
  credentials: true,                            // if you ever use cookies/auth headers
  optionsSuccessStatus: 204,                    // 204 is standard for preflight
};

// 1) Register CORS before routes
app.use(cors(corsOptions));

// 2) Explicitly respond to preflight for the route you call
//    Avoid wildcard patterns in Express 5 (path-to-regexp throws).
app.options('/review', cors(corsOptions));

// 3) Body parser
app.use(express.json());

// 4) Minimal request logger (helps you confirm path/method)
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} origin=${req.headers.origin || '-'}`);
  next();
});

// 5) Health check for Railway
app.get('/health', (_req, res) => res.status(200).send('OK'));

// 6) Optional GET /review to test in a browser tab
app.get('/review', (_req, res) => {
  res.status(200).json({ ok: true, info: 'Use POST /review from the frontend' });
});

// 7) Actual API route: POST /review
const generateRES = require('./controller/controller.js'); // must export (req,res)=>{}
app.post('/review', generateRES);

// 8) 404 for anything else
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// 9) Start server on Railway’s PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. CORS origin: ${FRONTEND_ORIGIN}`);
});