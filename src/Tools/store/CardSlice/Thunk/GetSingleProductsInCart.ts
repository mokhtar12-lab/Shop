import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";


import axios from "axios";




export const GetSingleProductsInCart = createAsyncThunk( "cart/GetSingleProductsInCart", async(_, ThunkAPI)=>{
    const {rejectWithValue, fulfillWithValue, getState} = ThunkAPI

    const {cart} = getState() as RootState
    
    const itemsWithId = Object.keys(cart.items)
    if(!itemsWithId.length) {
        return fulfillWithValue([])
    }

    try {
        const id = itemsWithId.map( (el)=> `id=${el}`).join('&')
        const response = await axios.get(`http://localhost:3000/Products?${id}`)
        return response.data

    } catch (error) {
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.message);
        }else{
            rejectWithValue("unable to get products")
        }
    }
} )



