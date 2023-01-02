import express from 'express';
import { login, register, logout } from '../controllers/auth.js';

const router = express.Router();

router.post('/login', login);
router.post('/regiser', register);
router.post('/logout', logout);

export default router;
