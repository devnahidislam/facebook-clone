import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getPosts = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json('You are not Loged in.');

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json('Invalid User.');

    const q = `SELECT p.*, firstname,surname, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId JOIN relationship AS r ON (p.userId = r.followedUserId AND r.followerUserId = ?)`;

    db.query(q, [userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
