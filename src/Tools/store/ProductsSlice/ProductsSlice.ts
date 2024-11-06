import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../../util/TypeOfData";
import GetProductsThunk from "./Thunk/GetProductsThunk";


const initialState:IProducts = {
    records:[],
    loading: "idle",
    error: null
}


const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        recordsCleanUp: (state) =>{
            state.records = []
        }
    },
    extraReducers: (builder) => {
        // Get All Products in Shop Page
        builder.addCase(GetProductsThunk.pending , (state) =>{
            state.loading = "pending"
            state.error = null
        } )

        builder.addCase(GetProductsThunk.fulfilled , (state, action) =>{
            state.loading = "succeeded"
            state.records = action.payload
        } )

        builder.addCase(GetProductsThunk.rejected , (state) =>{
            state.loading = "failed"
            state.error = "Not Found"
        } )
    }
})

export  {GetProductsThunk}

export const {recordsCleanUp} = ProductsSlice.actions

export default ProductsSlice.reducer;