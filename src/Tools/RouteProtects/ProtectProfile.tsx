import { Navigate } from "react-router-dom"
import { useAppSelector } from "../Hooks/reduxHooks"

export default function ProtectProfile({children}: {children: React.ReactNode}) {
    const {accessToken} = useAppSelector( state => state.auth )


    if(!accessToken) {
        return <Navigate to={'/'}/>
    }

    return (
        <div>{children}</div>
    )
}
