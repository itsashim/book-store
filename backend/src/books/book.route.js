import express from "express";
import { createPost,getAllBook,getBook,updateBook,deleteBook } from "./book.controller.js";
const router = express.Router();

router.post("/create-post",createPost);
router.get("/books",getAllBook);
router.get("/books/:id",getBook);
router.patch("/books/update/:id",updateBook);
router.delete("/books/delete/:id",deleteBook);

export default router;

