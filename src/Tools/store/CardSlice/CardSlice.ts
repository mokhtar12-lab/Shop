import { createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../util/TypeOfData";
import { GetSingleProductsInCart } from "./Thunk/GetSingleProductsInCart";



const initialState :ICart= {
    items:{},
    records: [],
    loading: "idle",
    error: null
}


const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

        AddToCart : (state, action) =>{
            const id = action.payload
            if(state.items[id]){
                state.items[id]++
            }else{
                state.items[id] = 1
            }
        },

        DeleteItem : (state, action) =>{
            delete state.items[action.payload]
            state.records = state.records.filter( (el) => el.id !== action.payload )
        },
    },
    extraReducers: (builder) =>{
        // Get Products in Cart
        builder.addCase(GetSingleProductsInCart.pending, (state) =>{
            state.loading = "pending"
            state.error = null
        })

        builder.addCase(GetSingleProductsInCart.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.records = action.payload
        })

        builder.addCase(GetSingleProductsInCart.rejected, (state) =>{
            state.loading = "failed"
            state.error = "failed"
        })

    }
})


export {GetSingleProductsInCart}

export const {AddToCart, DeleteItem} = CartSlice.actions

export default CartSlice.reducer