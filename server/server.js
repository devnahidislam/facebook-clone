import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

import cors from 'cors';
app.use(
  cors({
    origin: 'http://127.0.0.1:5173/',
  })
);

import authRoute from './routes/auth.js';

app.use('/api/auth', authRoute);

app.use((err, res) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || 'Something went wrong.';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
