import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import multer from "multer";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload/img");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import commentsRoute from "./routes/comments.js";
import likeRoute from "./routes/likes.js";

app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/likes", likeRoute);

app.use((err, res) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong.";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
