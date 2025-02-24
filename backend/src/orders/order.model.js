import mongoose from 'mongoose';
const {Schema} = mongoose;


const orderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    },
    address: {
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
            },
            state: {
                type: String,
            },
            zipcode: {
                type: Number,
            },
        },
    phone: {
        type: Number,
        required: true,
    },
    productIds: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }
    ],
    totalPrice: {
        type: Number,
    }
},{
    timestamps: true
})

const Order =  mongoose.model('Order',orderSchema);
export default Order;