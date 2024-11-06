import { createSlice } from "@reduxjs/toolkit";
import { ISpecialOffers } from "../../util/TypeOfData";
import GetSpecialOffersProducts from "./Thunk/GetSpecialOffersProducts";


const initialState:ISpecialOffers = {
    SpecialOffers:[],
    loading: "idle",
    error: null
}


const SpecialOffersSlice = createSlice({
    name:"SpecialOffers",
    initialState,
    reducers:{
        SpecialOffersCleanUp: (state) =>{
            state.SpecialOffers = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(GetSpecialOffersProducts.pending, (state)=>{
            state.loading = "pending"
        })
        builder.addCase(GetSpecialOffersProducts.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.SpecialOffers = action.payload
        })
        builder.addCase(GetSpecialOffersProducts.rejected, (state)=>{
            state.loading ="failed"
            state.error = "Not Found"
        })
    }
})


export {GetSpecialOffersProducts}

export const {SpecialOffersCleanUp} = SpecialOffersSlice.actions

export default SpecialOffersSlice.reducer