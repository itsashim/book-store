import express from "express";
import User from "../users/user.model.js";
import jwt  from "jsonwebtoken";

const router = express.Router();

router.post("/admin", async (req,res)=> {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
           return  res.status(400).json({message: "User not found"});
        }
        if(user.password !== password){
            return res.status(400).json({message: "Incorrect password", details: user});
        }
        const token = jwt.sign({
            id: user._id,
            username: user.username
        },
        process.env.SECRET_KEY,
        {expiresIn: "1h"}
    );
        return res.status(200).json({message: "successful",token,details: user,});
    }catch(err){
        console.log(err);
        return res.status(402).json({message: "Incorrect password", details: user});
    }
})

export default router;