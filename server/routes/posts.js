import express from "express";
import { getPosts, addPost, deletePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/addpost", addPost);
router.delete("/:id", deletePost);

export default router;
