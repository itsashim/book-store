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
        }
    }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer; 
