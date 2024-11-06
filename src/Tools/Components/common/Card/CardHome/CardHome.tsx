import { Link } from "react-router-dom"

import { ICard } from "../../../../util/TypeOfData"

import { useAppDispatch } from "../../../../Hooks/reduxHooks";

import { AddToCart } from "../../../../store/CardSlice/CardSlice";

import "./CardHomeStyle.css"

export default function CardHome({id, img, name, price}:ICard) {
    const dispatch = useAppDispatch()
    return (
        <>
            <div className="card-home">
                <div className="img">
                    <img src={img} alt="Product" />
                </div>
                <div className="info-product">
                    <div className="info">
                        <p className="title">{name.slice(0, 21)}</p>
                        <p className="price">{price}$</p>
                        <div className="options">
                        <ul>
                            <svg onClick={ ()=>{ dispatch(AddToCart(id)) } } className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
                            <Link to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </Link>
                            <Link to={"/"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </Link>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
