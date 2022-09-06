import express from "express";

// controller
import { getPost, createPost, deletePost } from "./../controllers/post.js";

const router = express.Router();

router.get("", getPost);
router.post("", createPost);
router.post("/deletePost", deletePost);

export default router;
