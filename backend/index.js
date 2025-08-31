const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require('cors');
const generateRES = require('./controller/controller.js');
app.use(cors({
  origin: "https://dev-lens-mu.vercel.app", 
  methods: ["GET", "POST"],
  credentials: true
}));

app.post('/review',generateRES);




const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

