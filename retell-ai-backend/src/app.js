// filepath: c:\Users\Akshay\Desktop\Main Projects\Retell AI\retell-ai-backend\src\app.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import paymentRemindersRoutes from './routes/paymentReminders.js';
import newUsersRoutes from './routes/newUsers.js';
import customerQueriesRoutes from './routes/customerQueries.js';
import { connectToDatabase } from './utils/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
connectToDatabase();

// Routes
app.use('/api/payment-reminders', paymentRemindersRoutes);
app.use('/api/new-users', newUsersRoutes);
app.use('/api/customer-queries', customerQueriesRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});