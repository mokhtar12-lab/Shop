import { useEffect } from "react"

import {useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks"
import { GetSingleProductsInCart } from "../../store/CardSlice/CardSlice"
import CardPageCart from "../../Components/common/Card/CardPageCart/CardPageCart"
import Spinner from "../../Components/spinner/Spinner"

import { TbShoppingCartX } from "react-icons/tb";

export default function Cart() {
    const dispatch = useAppDispatch()
    const {records, loading, items} = useAppSelector( (state)=> state.cart)

    useEffect( () =>{
        dispatch(GetSingleProductsInCart())
    },[dispatch] )

    const products = records.map( (el)=>({
        ...el,
        quantety: items[el.id]
    }))
    const totalPrice = products.reduce( (sum, item) => sum + (item.price * item.quantety),0 )

    const datachecking = ()=>{
        if(records.length === 0) {
            return(
                <div className="text-center">
                    <div className="flex justify-center">
                        <TbShoppingCartX size={100}/>
                    </div>
                    <h1 className="my-16 text-5xl font-bold "> No items in cart</h1>
                </div>
            )
        }else{
            return(
                <>
                    {
                        products.map( (items)=>{
                            return(
                                <div>
                                    <CardPageCart id={items.id} img={items.images} name={items.title} price={items.price} quantety={items.quantety} description={items.description} />
                                </div>
                            )
                        } )
                    }
                    <div className="text-center font-bold text-3xl">Totla Price: {totalPrice}</div>
                </>
            )
        }
    }

    return (
        <>
            <div className="cart-body container mx-auto my-10">
                <div className="my-5">
                    {
                        loading === "pending" ? <Spinner /> : datachecking()
                    }
                </div>
            </div>
        </>
    )
}
