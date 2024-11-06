import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ICategoriesProducts } from "../../util/TypeOfData"
import Card from "../../Components/common/Card/Card/Card"


import data from "../../../../data/data.json"


export default function Products() {
    const [ProductsInCategories, SetProductsInCategories] = useState<ICategoriesProducts[]>([])
    const {productId} = useParams()

    useEffect( ()=>{
        if(data.Categories[Number(productId) - 1].categore === "men"){
            SetProductsInCategories(data.men)
        }
        else if(data.Categories[Number(productId) - 1].categore === "Women") {
            SetProductsInCategories(data.Women)
        }
        else if(data.Categories[Number(productId) - 1].categore === "Shoes") {
            SetProductsInCategories(data.Shoes)
        }
    },[productId] )


    // useEffect( ()=>{
    //     fetch(`http://localhost:3000/Products?category=${productId}`)
    //     .then( (response) => response.json() )
    //     .then( (data) => SetProductsInCategories(data) )
    // },[productId] )

    return (
        <>
            {
                ProductsInCategories.map( (items)=>{
                    return(
                        <div key={items.id}>
                            <Card id={items.id} img={items.images}  name={items.title} price={items.price}/>
                        </div>
                    )
                } )
            }
        </>
    )
}