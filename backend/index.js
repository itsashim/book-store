import express from "express";
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    console.log("hello")
    res.send("Hello");
})  


app.listen(port,(req,res)=>{
    console.log("server is running in",port);
})