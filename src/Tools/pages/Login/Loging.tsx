import { useForm, SubmitHandler } from "react-hook-form"
import { LoginSchema } from "../../validation/LogInValidation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { NavLink, useNavigate, useSearchParams, Navigate } from "react-router-dom"
import "./loginStyle.css"

import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { logInThunk, resetUI } from "../../store/auth/authSlice"
import Spinner from "../../Components/spinner/Spinner"
import { useEffect } from "react"
import CheckEmailValidation from "../../Hooks/checkEmailValidation"




type TLogiing = z.infer<typeof LoginSchema>
export default function Login() {
    const {loading, accessToken} = useAppSelector( state=> state.auth )
    const loginDispatch = useAppDispatch()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const {register, handleSubmit, trigger, getFieldState, formState:{errors}} = useForm<TLogiing>({
        mode: "onBlur",
        resolver: zodResolver(LoginSchema)
    })

    useEffect( ()=>{
        loginDispatch(resetUI())
    }, [loginDispatch] )

    const LogInSubmit: SubmitHandler<TLogiing> = (data) => {
        const {email, password} = data
        loginDispatch(logInThunk( {email, password} )).unwrap().then( ()=> navigate('/'))
    }

    if(accessToken) {
        return <Navigate to={"/"} />
    }
    // Validation Email If Exist or not
    const {EnterEmail, EmailAvailabilityStatus, ChickEmailAvailability, resetEmailValidation} = CheckEmailValidation()
    const EmailOnBlureHandler = async(el: React.FocusEvent<HTMLInputElement>) =>{
        await trigger("email")
        const value = el.target.value
        const {isDirty, invalid} = getFieldState("email")
        if(isDirty && !invalid && EnterEmail !== value){
            ChickEmailAvailability(value)
        }
        if(isDirty && invalid && EnterEmail) {
            resetEmailValidation()
        }
    }
    const StatusValidation = () => {
        if(EmailAvailabilityStatus === "checking" ) {
            if(EmailAvailabilityStatus) {
                return <> <p style={{color: "gray" ,fontSize: "13px"}}>Please Wait We Checking The Email Validation</p> </>
            }else  {
                return
            }
        }
        else if(EmailAvailabilityStatus === "Available") {
            if(EmailAvailabilityStatus) {
                return <> <p style={{color: 'red' ,fontSize: "13px"}} >Not Found The Email</p> </>
            }else {
                return
            }
        }
        else if(EmailAvailabilityStatus === "Not Available") {
            if(EmailAvailabilityStatus) {
                return <> <p style={{color:"green" ,fontSize: "13px"}}>currect</p> </>
            }else {
                return
            }
        }
        else if(EmailAvailabilityStatus === "failed") {
            return <> <p style={{color: "red" ,fontSize: "13px"}}>Error form The Server</p> </>
        }
        return false
    }

    return (
        <div className="container mx-auto login">
            <div className="my-10 mx-auto form">
                <h1 className="title">Login</h1>
                {searchParams.get("message") === "account_created" && <p style={{textAlign: "center" , color: "green" ,fontSize: "13px"}}>Account is Created, Please Log in</p> }

                <form onSubmit={handleSubmit(LogInSubmit)}>

                    <input type="text" placeholder="Email" {...register('email')} onBlur={EmailOnBlureHandler} />
                    <p className="message"> {errors.email?.message} </p>
                    {StatusValidation()}

                    <input type="password" placeholder="Password" {...register('password')}/>
                    <p className="message"> {errors.password?.message} </p>

                    <button type="submit">
                        { loading === "pending" ? <Spinner /> : "LogIn" }
                    </button>
                </form>
                <div className="ps-3 pb-3">
                    <p className="text-red-700">Don't have an account? <NavLink className={"text-slate-950 ps-1"} to={"/sigUp"}>Register</NavLink></p>
                </div>

            </div>

        </div>
    )
}
