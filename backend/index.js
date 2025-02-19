import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import booksRoute from "./src/books/book.route.js";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(cors())

configDotenv();
const port = 3000;

// Post a Book
app.use(booksRoute);


app.get("/",(req,res)=>{
    console.log("hello")
    res.send("Hello");
})  

async function main(){
    await mongoose.connect(process.env.DB_URL);
}

main().then(console.log("Mongodb successfully connected!")).catch(err => console.log(err));

app.listen(port,(req,res)=>{
    console.log("server is running in",port);
})