import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/error/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import Journal from "../pages/Journal/Journal";
import Products from "../pages/products/Products";
import LoopingProducts from "../Components/common/LoopingProducts/LoopingProducts";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Loging";
import SignUp from "../pages/Signup/SignUp";
import Profile from "../pages/Profile/Profile";
import ProtectProfile from "../RouteProtects/ProtectProfile";


const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {path: "/", element: <Home />},
        {path: "/shop", element: <Shop />, children:[
            {
                index: true,
                path: "/shop",
                element: <LoopingProducts />,
            },
            {
                path: "/shop/:productId",
                element: <Products />,
            }
        ]},
        {path: "/about", element: <About />},
        {path: "/contact", element: <Contact />},
        {path: "/journal", element: <Journal />},
        {path: "/cart", element: <Cart />},
        {path: "/login", element: <Login />},
        {path: "/sigUp", element: <SignUp />},
        {path: "/profile", element: (
            <ProtectProfile>
                <Profile />
            </ProtectProfile>
        )}
    ]
}])


export default function RouterApp() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
