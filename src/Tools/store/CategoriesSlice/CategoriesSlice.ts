import { createSlice } from "@reduxjs/toolkit";
import { ICategories } from "../../util/TypeOfData";
import { GetAllCategories } from "./Thunk/GetAllCategories";


const initialState: ICategories = {
    records: [],
    loading: "idle",
    error: null,
}

const CategoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        recordsCleanUp: (state) =>{
            state.records = []
        }
    },
    extraReducers: (builder) =>{
        // Thunk Get All Categories
        builder.addCase(GetAllCategories.pending, (state)=>{
            state.loading = "pending"
        })
        builder.addCase(GetAllCategories.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.records = action.payload
        })
        builder.addCase(GetAllCategories.rejected, (state)=>{
            state.loading = "failed"
        })
// #################################################################################################

    }
})


export {GetAllCategories}

export const {recordsCleanUp} = CategoriesSlice.actions

export default CategoriesSlice.reducer