const express = require('express');
const cors = require('cors');
require('dotenv').config();

const generateRES = require('./controller/controller.js');
const app = express();

const FRONTEND_ORIGIN = 'https://dev-lens-mu.vercel.app';

const corsOptions = {
  origin: FRONTEND_ORIGIN,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// ✅ Apply CORS globally
app.use(cors(corsOptions));

// ✅ Explicitly handle all OPTIONS requests
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', FRONTEND_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.sendStatus(204);
});

app.use(express.json());

// Health check
app.get('/health', (req, res) => res.status(200).send('OK'));

// API route
app.post('/review', generateRES);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}. CORS origin: ${FRONTEND_ORIGIN}`);
});
