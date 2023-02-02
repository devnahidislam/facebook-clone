import express from "express";
import { getRelationships } from "../controllers/relationship.js";

const router = express.Router();

router.get("/", getRelationships);

export default router;
