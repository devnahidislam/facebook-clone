import jwt from "jsonwebtoken";
import moment from "moment/moment.js";
import { db } from "../db.js";

export const getPosts = (req, res) => {
  const userId = req.query.userId;

  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q =
      userId !== "undefined"
        ? `SELECT p.*, firstname, surname, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) WHERE p.userId = ? ORDER BY p.createdAt DESC`
        : `SELECT p.*, firstname, surname, profilePic FROM posts AS p JOIN users AS u ON (u.id = p.userId) LEFT JOIN relationship AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ?  OR p.userId = ? ORDER BY p.createdAt DESC`;

    const values =
      userId !== "undefined" ? [userId] : [userInfo.id, userInfo.id];

    db.query(q, values, (err, data) => {
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

export const deletePost = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q = "DELETE FROM posts WHERE `id`=? AND `userId`=?";

    db.query(q, [req.params.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows > 0)
        return res.status(200).json("Post has been Deleted.");
      return res.status(403).json("You can Delete only your post.");
    });
  });
};
