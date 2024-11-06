import { Outlet } from "react-router-dom";
import NavBar from "../Components/common/NavBar/NavBar";
import {ProfileBtn, CartBtn} from "../Components/common/buttons/ProfileBtn";
import Footer from "../Components/common/Footer/Footer";

export default function MainLayout() {
    return (
        <>
            <NavBar />
            <ProfileBtn />
            <CartBtn />
            <Outlet />
            <Footer />
        </>
    )
}
