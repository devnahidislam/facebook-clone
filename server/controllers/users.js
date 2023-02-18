import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.AccessToken;
  if (!token) return res.status(401).json("You are not Loged in.");

  jwt.verify(token, process.env.KEY, (err, userInfo) => {
    if (err) return res.status(403).json("Invalid User.");

    const q =
      "UPDATE users SET `firstname`=?, `surname`=?, `city`=?, `coverpic`=?, `profilePic`=? WHERE id=?";

    db.query(
      q,
      [
        req.body.firstname,
        req.body.surname,
        req.body.city,
        req.body.coverpic,
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated");
        return res.status(403).json("You can update only your data.");
      }
    );
  });
};
