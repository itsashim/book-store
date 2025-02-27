import express from "express";
import { createPost,getAllBook,getBook,updateBook,deleteBook } from "./book.controller.js";
import verifyAdminToken from "../middleware/verifyAdminToken.js";
const router = express.Router();

router.post("/create-post",verifyAdminToken,createPost);
router.get("/books",getAllBook);
router.get("/books/:id",getBook);
router.patch("/books/update/:id",verifyAdminToken,updateBook);
router.delete("/books/delete/:id",verifyAdminToken,deleteBook);

export default router;

