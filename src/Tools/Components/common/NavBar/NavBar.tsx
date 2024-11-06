import { Link, NavLink } from "react-router-dom"
import "./navStyle.css"
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks"
import { GetSingleProductsInCart } from "../../../store/CardSlice/CardSlice"
import { useEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import SearchBarList from "../SearchBarList/SearchBarList"
import { logOut } from "../../../store/auth/authSlice"


export default function NavBar() {
    const [ Results, SetResults ] = useState([])
    const {accessToken} = useAppSelector( (state)=>state.auth )
    const dispatchLogOut = useAppDispatch()
    const dispatch = useAppDispatch()
    const {items} = useAppSelector( (state)=> state.cart)

    useEffect( () =>{
        dispatch(GetSingleProductsInCart())
    },[dispatch] )

    const values = Object.values(items).reduce( (a, b)=>{return a + b}, 0)

    // Toggle The User Box
    function TreggleUser() {
        document.querySelector('.user-bar')?.classList.remove('close')
        document.querySelector('.user-bar')?.classList.toggle('open')
    }
    function DeletMenu() {
        document.querySelector('.user-bar')?.classList.remove('open')
        document.querySelector('.user-bar')?.classList.toggle('close')
    }

    // toggle the Menu Bar
    function TreggleMenuBar() {
        document.querySelector('.menu-bar')?.classList.remove('close-bar')
        document.querySelector('.menu-bar')?.classList.toggle('open-bar')
    }
    function toggleCloseBar() {
        document.querySelector('.menu-bar')?.classList.remove('open-bar')
        document.querySelector('.menu-bar')?.classList.toggle('close-bar')
    }


    return (
        <>
            <header className="container mx-auto px-10 flex h-20 justify-between border-b-gray-200">
                <div className="logo my-auto">
                    <Link to={"/"} className="text-4xl font-bold">SHOPPING</Link>
                </div>

                <svg onClick={() =>TreggleMenuBar()} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>


                <nav className="my-auto">
                    <ul className=" flex">
                        <li className="after:content-['|']"> <NavLink className={"px-7"} to={"/"}>Home</NavLink> </li>
                        <li className="after:content-['|']"> <NavLink className={"px-7"} to={"/shop"}>Shop</NavLink> </li>
                        <li className="after:content-['|']"> <NavLink className={"px-7"} to={"/about"}>About</NavLink> </li>
                        <li className="after:content-['|']"> <NavLink className={"px-7"} to={"/contact"}>Contact</NavLink> </li>
                        <li className="after:content-['']"> <NavLink className={"px-7"} to={"/journal"}>Journal</NavLink> </li>
                    </ul>
                </nav>
            </header>

            <hr/>

            <div className="part bg-[#F5F5F3]">
                <div className="part-of-header container mx-auto px-10 h-20 flex justify-between ">
                    <div className="form-search my-auto">
                        <div className="search flex">
                            <form>
                                <SearchBar SetResults={SetResults} />
                            </form>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className="cart-profile flex my-auto">
                        <div>
                            <svg className="user" onClick={() =>TreggleUser()} width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M16 18L19 21M19 21L22 18M19 21V15M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <Link to={"/cart"} className="cart">
                                <svg className="cart-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>{values}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <SearchBarList LoopingResult={Results} />

                <div className="user-bar">
                    <ul>
                        {
                            accessToken ? 
                            <>
                                <NavLink onClick={()=>DeletMenu()} to={"/profile"}>Profile</NavLink>
                                <NavLink onClick={()=> dispatchLogOut(logOut())} to={"/"}>LogOut</NavLink>
                            </> :
                            <>
                                <NavLink onClick={()=>DeletMenu()} to={"/login"} className={"li"}>LogIn</NavLink>
                                <NavLink onClick={()=>DeletMenu()} to={"/sigUp"}>SignUp</NavLink>
                            </>
                        }
                    </ul>
                </div>
            </div>

            <div className="menu-bar">
                <svg onClick={() =>TreggleMenuBar()} className="close-icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <nav >
                    <ul className=" block">
                        <li> <NavLink onClick={()=>toggleCloseBar()} className={"px-7"} to={"/"}>Home</NavLink> </li>
                        <li> <NavLink onClick={()=>toggleCloseBar()} className={"px-7"} to={"/shop"}>Shop</NavLink> </li>
                        <li> <NavLink onClick={()=>toggleCloseBar()} className={"px-7"} to={"/about"}>About</NavLink> </li>
                        <li> <NavLink onClick={()=>toggleCloseBar()} className={"px-7"} to={"/contact"}>Contact</NavLink> </li>
                        <li> <NavLink onClick={()=>toggleCloseBar()} className={"px-7"} to={"/journal"}>Journal</NavLink> </li>
                    </ul>
                </nav>
            </div>

        </>
    )
}
