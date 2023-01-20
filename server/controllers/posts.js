import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
import { db } from "../db.js";

export const getPosts = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q = `SELECT p.*, firstname, surname, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationship AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ?  OR p.userId = ? ORDER BY p.createdAt DESC;`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q =
      "INSERT INTO posts (`desc`,`img`,`createdAt`,`userId`) VALUES (?);";

    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been created.");
    });
  });
};
