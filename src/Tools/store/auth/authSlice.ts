import { createSlice } from "@reduxjs/toolkit";
import { IDataSignUpForm } from "../../util/TypeOfData";
import { signupThunk } from "./Thunk/signup/signupThunk";
import logInThunk from "./Thunk/login/logInThunk";

const initialState:IDataSignUpForm ={
    data: null,
    loading: "idle",
    error: null,
    accessToken: null
}


const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        resetUI : (state) =>{
            state.loading = "idle"
            state.error = null
        },
        logOut: (state)=>{
            state.data = null
            state.accessToken = null
        }
    },
    extraReducers: (builder)=>{
        // Sign Up
        builder.addCase(signupThunk.pending, (state)=>{
            state.loading = "pending"
        })

        builder.addCase(signupThunk.fulfilled, (state)=>{
            state.loading = "succeeded"
        })

        builder.addCase(signupThunk.rejected, (state)=>{
            state.loading = "failed"
            state.error = "There're Some Error"
        })

        // Log In
        builder.addCase(logInThunk.pending, (state)=>{
            state.loading = "pending"
            state.error = null
        })

        builder.addCase(logInThunk.fulfilled, (state, action)=>{
            state.loading = "succeeded"
            state.accessToken = action.payload.accessToken
            state.data = action.payload.data
        })

        builder.addCase(logInThunk.rejected, (state)=>{
            state.loading = "failed"
            state.error = "There're Some Error"
        })
    }
})

export {signupThunk, logInThunk }

export const {resetUI, logOut} = AuthSlice.actions
export default AuthSlice.reducer