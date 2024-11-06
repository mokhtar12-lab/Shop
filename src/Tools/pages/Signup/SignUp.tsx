import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { ZodSignUpSchema } from "../../validation/SignupValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { NavLink, useNavigate, useSearchParams, Navigate } from "react-router-dom"
import React, { useEffect } from "react"
import { signupThunk, resetUI } from "../../store/auth/authSlice"
import Spinner from "../../Components/spinner/Spinner"
import CheckEmailValidation from "../../Hooks/checkEmailValidation"
import "./signupStyle.css"
type TDataSignUpForm = z.infer<typeof ZodSignUpSchema>

export default function SignUp() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const {accessToken, loading} = useAppSelector(state => state.auth)
    const dispachSignUp = useAppDispatch()

    const {register, handleSubmit, getFieldState, trigger, formState: { errors }} = useForm<TDataSignUpForm>({
        mode: "onBlur",
        resolver : zodResolver(ZodSignUpSchema)
    })

    const FormData: SubmitHandler<TDataSignUpForm> = (data)=>{
        const {firstName, lastName, phoneNumber, email, password, confirmPassword} = data
        dispachSignUp(signupThunk({firstName, lastName, phoneNumber, email, password, confirmPassword})).unwrap().then( ()=>{navigate("/login")} )
    }

    useEffect( ()=>{
        return () =>{
            dispachSignUp(resetUI())
        }
    }, [dispachSignUp] )

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
                return <> <p style={{color: 'green' ,fontSize: "13px"}} >Email is Valid To Use it</p> </>
            }else {
                return
            }
        }
        else if(EmailAvailabilityStatus === "Not Available") {
            if(EmailAvailabilityStatus) {
                return <> <p style={{color:"red" ,fontSize: "13px"}}>Email is already using</p> </>
            }else {
                return
            }
        }
        else if(EmailAvailabilityStatus === "failed") {
            return <> <p style={{color: "red" ,fontSize: "13px"}}>Error form The Server</p> </>
        }
        return false
    }
    const disableCheck = () =>{
        if(EmailAvailabilityStatus === "idle") {
            return true
        }
        else if(EmailAvailabilityStatus === "checking") {
            return true
        }
        else {
            if(EmailAvailabilityStatus === "Not Available") {
                return true
            }else {
                return false
            }
        }
    }

    return (
        <div className="container mx-auto">
            <div className="form">
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit(FormData)}>
                    {searchParams.get("message") === "account_created" &&  <p style={{color: 'green' ,fontSize: "10px"}}> Your account successfully created, please login</p> }
                    <div className="first-last">
                        <div className="first">
                            <input className="firstName" type="text" placeholder="First Name" {...register('firstName')}/>
                            <p className="message">{errors.firstName?.message}</p>
                        </div>

                        <div className="last">
                            <input className="lastName" type="text" placeholder="Last Name" {...register('lastName')}/>
                            <p className="message"> {errors.lastName?.message} </p>
                        </div>

                    </div>

                    <input className="input" type="text" placeholder="Phone Number" {...register('phoneNumber')} />
                    <p className="Messages">{errors.phoneNumber?.message}</p>

                    <input className="input" type="email" placeholder="Enter Your Email"  {...register('email')} onBlur={EmailOnBlureHandler}/>
                    <p className="Messages">{errors.email?.message}</p>
                    {StatusValidation()}

                    <input className="input" type="password" placeholder="Password"  {...register('password')}/>
                    <p className="Messages">{errors.password?.message}</p>
                    
                    <input className="input" type="password" placeholder="Repeat Password"  {...register('confirmPassword')}/>
                    <p className="Messages">{errors.confirmPassword?.message}</p>
                    
                    <button className="BTN" disabled={disableCheck()}>
                        {loading === "pending" ? <div className="w-5 m-0 p-0"><Spinner/></div> : "SignUp"}
                    </button>
                </form>
                <div className="ps-3 pb-3">
                    <p className="text-red-700">I have an account? <NavLink className={"text-slate-950 ps-1"} to={"/login"}>login</NavLink></p>
                </div>
            </div>
        </div>
    )
}
