import express from 'express';
import { test } from '../controllers/auth.js';

const router = express.Router();
router.get('/get', test);

export default router;
