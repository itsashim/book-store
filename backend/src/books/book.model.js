import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
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
const Book = mongoose.model('Book', bookSchema);

export default Book;