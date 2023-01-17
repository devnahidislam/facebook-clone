import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);

app.use(cookieParser());

import authRoute from './routes/auth.js';
import postsRoute from './routes/posts.js';

app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);

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
