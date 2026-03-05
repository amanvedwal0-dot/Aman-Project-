// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// connect database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
const todoRoutes = require('./routes/rtodo');
app.use('/api/v1', todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});