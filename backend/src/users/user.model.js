import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    trending: Boolean,
    coverImage: {
        type: String,
        required: true
    },
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    timeStamps: true
})
const User = mongoose.model('User', userSchema);

export default User;