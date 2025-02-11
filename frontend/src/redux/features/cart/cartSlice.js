import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2'

const initialState = {
    cartItems:[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const curItem = state.cartItems.find((book)=> book._id == action.payload._id);
            if(!curItem){
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Added Successfully ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Already Exists",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        },
        removeFromCart: (state,action)=>{
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Removed Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(state.cartItems)
        },
        clearCart: (state)=>{
            state.cartItems = [];
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Removed Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
});

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer; 
