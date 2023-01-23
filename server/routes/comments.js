import express from "express";
import { addComment, getComments } from "../controllers/comments.js";

const router = express.Router();

router.get("/", getComments);
router.post("/addcomment", addComment);

export default router;
