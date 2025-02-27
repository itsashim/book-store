import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    role: {
        type: String,
        enum: ['admin','user'],
        required: true 
    }
},{
    timestamps: true
})
const User = mongoose.model('User', userSchema);

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    try{
        this.password = await bcrypt.hash(this.password,salt);
    }catch(err){
        next(err);
    }
})

export default User;