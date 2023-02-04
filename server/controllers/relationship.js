import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getRelationships = (req, res) => {
  const q = "SELECT followerUserId FROM relationship WHERE followedUserId = ?";

  db.query(q, [req.query.followedUserId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res
      .status(200)
      .json(data.map((relationship) => relationship.followerUserId));
  });
};

export const addRelationship = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q =
      "INSERT INTO relationship (`followerUserId`, `followedUserId`) VALUES (?);";

    const values = [userInfo.id, req.body.userId];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Following");
    });
  });
};

export const deleteRelationship = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q = "DELETE FROM relationship WHERE `followerUserId`= ? AND `followedUserId` = ?";

    db.query(q, [userInfo.id, req.query.userId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Unfollow");
    });
  });
};
