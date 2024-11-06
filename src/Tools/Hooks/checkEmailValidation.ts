import { useState } from "react";

import axios from "axios";

type TStatus ="idle" | "checking" | "Available" | "Not Available" | "failed"

const CheckEmailValidation = () =>{
    const [EmailAvailabilityStatus, SetEmailAvailabilityStatus] = useState<TStatus>("idle")
    const [EnterEmail, SetEnterEmail] = useState<null | string>(null)

    const ChickEmailAvailability = async(email: string) => {
        SetEnterEmail(email)
        SetEmailAvailabilityStatus("checking")
        try {
            const response = await axios.get(`http://localhost:3000/users?email=${email}`)
            if(!response.data.length) {
                SetEmailAvailabilityStatus("Available")
            }else{
                SetEmailAvailabilityStatus("Not Available")
            }
        } catch {
            SetEmailAvailabilityStatus("failed")
        }
    }

    const resetEmailValidation = () =>{
        SetEmailAvailabilityStatus("idle")
        SetEnterEmail(null)
    }

    return { EmailAvailabilityStatus, EnterEmail, ChickEmailAvailability, resetEmailValidation }
}

export default CheckEmailValidation