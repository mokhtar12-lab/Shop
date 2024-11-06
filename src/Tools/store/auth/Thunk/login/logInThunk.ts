import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILogin, IResponse } from "../../../../util/TypeOfData";


const logInThunk = createAsyncThunk("auth/logInThunk", async(data:ILogin, ThunkAPI) =>{
    const {rejectWithValue} = ThunkAPI

    try {
        const response = await axios.post<IResponse>('http://localhost:3000/login', data)
        return response.data
    } catch (error) {
        console.error(error)
        return rejectWithValue('Failed to sign up')
    }
})

export default logInThunk