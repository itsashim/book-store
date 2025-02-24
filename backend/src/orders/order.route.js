import express from 'express';
import Order from './order.model.js';

const router = express.Router();

// Get all order with email
router.get("/email/:email", async (req,res)=>{
    const email = req.params.email;
    try{
        const orders = await Order.find({email}).sort({createdAt: -1})
        res.status(200).json({message: "Successfull", data: orders});

    }catch(err){
        console.log(err)
    }
})

router.post("/create-order", async (req,res)=>{
    try{
        const postOrder = new Order(req.body);
        await postOrder.save();
        res.status(200).json({message: "Successfull", details: postOrder})
    }catch(err){
        res.status(500).json({message: err.message});
        console.log(err);
    }
})

export default router;