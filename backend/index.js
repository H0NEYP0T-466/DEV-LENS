// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const generateres=require('./controller/controller.js');

const app = express();
app.set('trust proxy', 1); // if behind Railway proxy

// Your Vercel frontend origin
const FRONTEND_ORIGIN = 'https://dev-lens-mu.vercel.app';

// --------------------
// CORS Middleware
// --------------------
app.use(cors({
  origin: FRONTEND_ORIGIN,
  methods: ['GET','POST','OPTIONS'],
  credentials: true
}));

// --------------------
// JSON body parser
// --------------------
app.use(express.json());

// --------------------
// Request Logger
// --------------------
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} origin=${req.headers.origin || '-'}`);
  next();
});

// --------------------
// Health Check
// --------------------
app.get('/health', (_req, res) => res.status(200).send('Server is running!'));

// --------------------
// Optional GET for /review
// --------------------
app.get('/review', (_req, res) => {
  res.status(200).json({ ok: true, info: 'Use POST /review from the frontend' });
});


// --------------------
// POST /review
// --------------------
app.post('/review', async (req, res) => {
  try {
    console.log('Request is received as:', req.body);
    await generateres(req, res);
  } catch (err) {
    console.error('POST /review error:', err);
    if (!res.headersSent) res.status(500).json({ error: 'Internal Server Error' });
  }
});

// --------------------
// 404 Fallback
// --------------------
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// --------------------
// Start Server
// --------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}. CORS origin: ${FRONTEND_ORIGIN}`));

// --------------------
// Keep-alive log for Railway
// --------------------
setInterval(() => console.log("Server is alive"), 60000);
