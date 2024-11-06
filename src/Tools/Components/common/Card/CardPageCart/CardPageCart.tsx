import { useAppDispatch } from "../../../../Hooks/reduxHooks"

import { ICardInCart } from "../../../../util/TypeOfData"
import "./CardPageCartStyle.css"
import { DeleteItem } from "../../../../store/CardSlice/CardSlice"


export default function CardPageCart({id, img, name, price, quantety, description}:ICardInCart) {
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="card-cart border ">
                
                <div className="image">
                    <img src={img} />
                </div>

                <div className="info-buttons">

                    <div className="info">
                        <div className="title">
                            <span> Name:  </span>
                            <hr />
                            <h1>{name}</h1>
                        </div>

                        <div className="price">
                            <span> Price: </span>
                            <hr />
                            <h1>{price}$</h1>
                        </div>

                        <div className="quantety">
                            <span> Quantity :</span>
                            <hr />
                            <h1>{quantety}</h1>
                        </div>

                        <div className="description">
                            <span> Description </span>
                            <hr />
                            <h1>{description}</h1>
                        </div>

                    </div>

                    <div className="buttons">
                        <button onClick={()=> dispatch(DeleteItem(id))} className="btn">Delete</button>
                    </div>

                </div>
            </div>


        </>
    )
}
