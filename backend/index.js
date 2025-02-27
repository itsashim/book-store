import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import booksRoute from "./src/books/book.route.js";
import ordersRoute from "./src/orders/order.route.js"
import userRoute from "./src/users/user.route.js"
import adminRoute from "./src/stats/admin.stats.js";
import cors from "cors"
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

configDotenv();
const port = 3000;

// Post a Book
app.use(booksRoute);
app.use("/api/orders",ordersRoute);
app.use("/auth",userRoute);
app.use("api/admin",adminRoute);


app.get("/",(req,res)=>{
    console.log("hello")
    res.send("Hello");
})  

async function main(){
    await mongoose.connect(process.env.DB_URL);
}

main().then(console.log("Mongodb successfully connected!")).catch(err => console.log(err));

app.listen(port,()=>{
    console.log("server is running in",port);
})