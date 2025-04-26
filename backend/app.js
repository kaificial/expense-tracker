const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/expenses', expenseRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/expense-tracker')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});