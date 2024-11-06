import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAllCategories = createAsyncThunk("categories/GetAllCategories", async(_,ThunkAPI ) =>{
    const {rejectWithValue} = ThunkAPI


    try {

        const response = await axios.get("http://localhost:3000/Categories")
        return response.data
    
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message);
        }else{
            rejectWithValue("unable to get products")
        }
    }
})