import { db } from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const login = (req, res, next) => {
  const q = 'SELECT * FROM users WHERE email = ?';

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json('User not found.');

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword) return res.status(400).json('Wrong input.');
    const token = jwt.sign({ id: data[0].id }, process.env.KEY);

    const { password, ...others } = data[0];

    res
      .cookie('AccessToken', token, { httpOnly: true })
      .status(200)
      .json(others);
  });
};

export const logout = (req, res, next) => {
  res
    .clearCookie('AccessToken', {
      secure: true,
      nameSite: 'none',
    })
    .status(200)
    .json('User has been loged out.');
};
