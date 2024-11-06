// import { useEffect } from "react"
// import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks"

// import { GetProductsThunk, recordsCleanUp } from "../../../store/ProductsSlice/ProductsSlice"
// import Spinner from "../../spinner/Spinner"


import Card from "../Card/Card/Card"
import "./loopingStyle.css"
import data from "../../../../../data/data.json"


export default function LoopingProducts() {
    // Looping Products by Redux Toolkit
    //============================
    // const dispatch = useAppDispatch()
    // const {records, loading} = useAppSelector( (state)=> state.product )
    // useEffect( () =>{
    //     dispatch(GetProductsThunk())
    //     return () => {dispatch(recordsCleanUp())}
    // },[dispatch] )
    // =============================================================

    return (
        <>
            {
                data.Products.map( (items)=>{
                        return (
                            <div key={items.id} className="patents-of-card">
                                <Card id={items.id} img={items.images} name={items.title} price={items.price} />
                            </div> 
                        )
                    } )
                // loading === "pending" ? <Spinner /> : records.map( (items)=>{
                //     return (
                //         <div key={items.id} className="patents-of-card">
                //             <Card id={items.id} img={items.images} name={items.title} price={items.price} />
                //         </div> 
                //     )
                // } )
            }
        </>
    )
}
