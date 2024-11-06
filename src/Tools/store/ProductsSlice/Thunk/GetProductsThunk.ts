import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


const GetProductsThunk = createAsyncThunk("products/GetProductsThunk", async(_, ThunkAPI) => {
    const {rejectWithValue} = ThunkAPI

    try {
        const response = await axios.get("http://localhost:3000/Products")
        return response.data
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message);
        }else{
            rejectWithValue("unable to get products")
        }
    }

})


export default GetProductsThunk;