import dotenv from 'dotenv';
import express from 'express'
import connectDB from './config/db.js';
dotenv.config();

const app = express();
connectDB();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
