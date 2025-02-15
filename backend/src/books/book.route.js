import express from "express";
import { createPost,getAllBook,getBook } from "./book.controller.js";
const router = express.Router();

router.post("/create-post",createPost);
router.get("/books",getAllBook);
router.get("/books/:id",getBook);

export default router;

