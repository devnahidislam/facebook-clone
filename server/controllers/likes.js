import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId = ?";

  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data.map((like) => like.userId));
  });
};

export const addLike = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q = "INSERT INTO likes (`userid`, `postId`) VALUES (?);";

    const values = [userInfo.id, req.body.postId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post has been liked.");
    });
  });
};

export const deleteLike = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q = "DELETE FROM likes WHERE `userId`= ? AND `postId` = ?";

    db.query(q, [userInfo.id, req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post has been disliked.");
    });
  });
};
