import { db } from '../db.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
  // Check user if exist
  const check = 'SELECT * FROM users WHERE email = ?';

  db.query(check, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json('User already exist.');
  });

  // Create a user
  // Hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const create =
    'INSERT INTO users (`firstname`, `surname`, `email`, `password`) VALUE (?)';

  const values = [
    req.body.firstname,
    req.body.surname,
    req.body.email,
    hashedPassword,
  ];

  db.query(create, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json('User has been created.');
  });
};

export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {};
