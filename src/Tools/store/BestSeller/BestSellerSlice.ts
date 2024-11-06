import { createSlice } from "@reduxjs/toolkit";
import { IBestSeller } from "../../util/TypeOfData";
import GetBestSellerProducts from "./Thunk/GetBestSellerProducts";


const initialState:IBestSeller = {
    bestSeller:[],
    loading: "idle",
    error: null
}


const BestSellerSlice = createSlice({
    name:"bestSeller",
    initialState,
    reducers:{
        BestSellerCleanUp: (state) =>{
            state.bestSeller = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(GetBestSellerProducts.pending, (state)=>{
            state.loading = "pending"
        })
        builder.addCase(GetBestSellerProducts.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.bestSeller = action.payload
        })
        builder.addCase(GetBestSellerProducts.rejected, (state)=>{
            state.loading ="failed"
            state.error = "Not Found"
        })
    }
})


export {GetBestSellerProducts}

export const {BestSellerCleanUp} = BestSellerSlice.actions

export default BestSellerSlice.reducer