import { createSlice } from "@reduxjs/toolkit";
import { INewArrivals } from "../../util/TypeOfData";
import GetNewArrivalsProducts from "./Thunk/GetNewArrivalsProducts";


const initialState:INewArrivals = {
    newArrivals:[],
    loading: "idle",
    error: null
}


const ArrivalsSlice = createSlice({
    name:"arrivals",
    initialState,
    reducers:{
        newArrivalsCleanUp: (state) =>{
            state.newArrivals = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(GetNewArrivalsProducts.pending, (state)=>{
            state.loading = "pending"
        })
        builder.addCase(GetNewArrivalsProducts.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.newArrivals = action.payload
        })
        builder.addCase(GetNewArrivalsProducts.rejected, (state)=>{
            state.loading ="failed"
            state.error = "Not Found"
        })
    }
})


export {GetNewArrivalsProducts}

export const {newArrivalsCleanUp} = ArrivalsSlice.actions

export default ArrivalsSlice.reducer