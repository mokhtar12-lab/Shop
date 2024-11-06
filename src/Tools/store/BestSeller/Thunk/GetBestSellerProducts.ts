

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GetBestSellerProducts = createAsyncThunk("bestSeller/GetNewArrivalsProducts", async(_, ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI

    try {
        const responsive = await axios.get("http://localhost:3000/BestSellers")
        return responsive.data
    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message);
        }else{
            rejectWithValue("unable to get products")
        }
    }
})

export default GetBestSellerProducts