import { NavLink } from "react-router-dom"
import avatarProfile from "../../../assets/avatarProfile.jpg"
import "./profileStyle.css"

export default function Profile() {


    return (
        <div className="container mx-auto profile">
            <div className="info-profile">
                <div className="avatar">
                    <img src={avatarProfile} />
                </div>

                <div className="user-info mt-5 text-2xl flex justify-between">
                    <h1 className="title">name:  <span>UserName</span> </h1>
                    <p>email: <span>Your Email</span> </p>
                    <p>Your Products :  <NavLink to={"/cart"} className={"text-white px-2 font-bold border rounded-3xl bg-slate-600 hover:bg-black"}>Cart</NavLink> </p>

                </div>
            </div>
            
        </div>
    )
}
