import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { IDataThunk } from "../../../../util/TypeOfData";

export const signupThunk = createAsyncThunk("auth/signupThunk", async (data:IDataThunk, ThunkAPI)=>{
    const {rejectWithValue} = ThunkAPI
    try {
        const response = await axios.post("http://localhost:3000/users", data)
        return response.data
    } catch (error){
        console.log(error);
        return rejectWithValue('Failed to sign up')
    }

})
