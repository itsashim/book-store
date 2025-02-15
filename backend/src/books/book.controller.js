import Book from "./book.model.js";

const createPost = async (req,res)=>{
    try{
       const postBook = new Book(req.body);
       await postBook.save();
       res.status(200).json({message: "successfully posted",data:postBook})
    }catch(err){
       console.log("There was an error", err);
       res.status(500).json({ error: "Failed to create post", details: err.message });
    }
}

const getAllBook = async (req,res)=>{
    try{
        const allBooks = await Book.find();
        res.status(200).json({message: "successfully fetched",data:allBooks})
    }catch(err){
        console.log("There was error",err)
       res.status(500).json({ error: "Failed to fetch data", details: err.message });
    }
}

const getBook = async (req,res)=>{
    try{
        const getBook = await Book.findById(req.params.id);
        res.status(200).json({message: "Successfully fetched",data: getBook})
    }catch(err){
        console.log("There was an error",err)
        res.status(500).json({message: "Faild to fetch data",details: err.message})
    }
}

export {createPost,getAllBook,getBook};