const express = require('express');
const cors = require('cors');
require('dotenv').config();

const generateRES = require('./controller/controller.js');

const app = express();

// CORS must be applied BEFORE any routes/body parsers
const FRONTEND_ORIGIN = 'https://dev-lens-mu.vercel.app';

// Configure CORS: allow only your frontend origin, allow the methods you use,
// allow typical headers, and allow credentials if you need cookies/auth headers.
const corsOptions = {
  origin: FRONTEND_ORIGIN,                    // required: origin cannot be "*" when credentials is true
  methods: ['GET', 'POST', 'OPTIONS'],        // methods allowed from the browser
  allowedHeaders: ['Content-Type', 'Authorization'], // headers your frontend sends
  credentials: true,                           // include Access-Control-Allow-Credentials: true
  optionsSuccessStatus: 204                    // some browsers expect 204 for preflight
};

// Apply CORS to all requests
app.use(cors(corsOptions));

// Explicitly handle all preflight requests so they don’t 404
app.options('*', cors(corsOptions));

// Parse JSON bodies after CORS (so preflight OPTIONS is handled first)
app.use(express.json());

// Simple health route to verify the service is reachable in Railway
app.get('/health', (req, res) => res.status(200).send('OK'));

// Your API route (POST /review)
app.post('/review', generateRES);

// Optional: basic 404 for unmatched routes (after all routes)
app.use((req, res) => res.status(404).json({ error: 'Not Found' }));

// Start server on Railway’s provided PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. CORS origin: ${FRONTEND_ORIGIN}`);
});