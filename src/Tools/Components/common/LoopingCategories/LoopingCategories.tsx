// import { useEffect } from "react"
// import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks"
// import { GetAllCategories, recordsCleanUp } from "../../../store/CategoriesSlice/CategoriesSlice"


import { Link } from "react-router-dom"
import data from "../../../../../data/data.json"

export default function LoopingCategories() {
    // Looping Categories by Redux Toolkit
    //============================
        // const dispatch = useAppDispatch()

        // const {records} = useAppSelector( (state)=> state.categories )

        // useEffect( ()=>{
        //     dispatch(GetAllCategories())
        //     return () => {dispatch(recordsCleanUp())}
        // },[dispatch] )
    // =============================================================


    return (
        <>
            <div className="my-1">
                <Link className="w-full inline-block" to={"/shop"}>All</Link>
            </div>
            <hr/>
            {

                data.Categories.map( (items) =>{
                        return(
                            <>
                                <div className="my-1 last:border-none w-full" key={items.id}>
                                    <Link className="w-full inline-block" to={`/shop/${items.id}`} key={items.id} >{items.categore}</Link>
                                </div>
                                <hr/>
                            </>
                        )
                    }  )
                // records.map( (items) =>{
                //     return(
                //         <>
                //             <div className="my-1" key={items.id}>
                //                 <Link to={`/shop/${items.categore}`} key={items.id} >{items.categore}</Link>
                //             </div>
                //             <hr/>
                //         </>
                //     )
                // } )
            }
        </>
    )
}
