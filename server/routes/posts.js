import express from "express";
import { getPosts, addPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/addpost", addPost);

export default router;
