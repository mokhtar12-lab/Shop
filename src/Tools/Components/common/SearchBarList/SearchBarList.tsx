import { NavLink } from "react-router-dom";

import "./Styling.css"
import { TiDelete } from "react-icons/ti";


interface IState {
    LoopingResult: {id:number, title:string, price:number, category:string, images:string}[]
}

export default function SearchBarList({LoopingResult}:IState) {
    const Lopping = () =>{
        function Close() {
            document.querySelector('.search-output')?.classList.toggle('close')
        }

        if(LoopingResult.length) {
            return (
                <div className="search-output">
                <TiDelete className="icon" onClick={ ()=> {Close()}  } />
                {
                    LoopingResult.map( item => (
                        <>
                            <NavLink to={"/details/itemID"} key={item.id} className="">
                                <div className="content">
                                    <h3>{item.title}</h3>
                                </div>
                            </NavLink>
                            <hr/>
                        </>
                    ))
                }
                </div>
            )
        }
        else {
            return (
                <div className="search-output">
                {
                    LoopingResult.map( item => (
                        <>
                            <NavLink to={"/details/itemID"} key={item.id} className="">
                                <div className="content">
                                    <h3>{item.title}</h3>
                                </div>
                            </NavLink>
                            <hr/>
                        </>
                    ))
                }
                </div>
            )
        }
    }


    return (
        <>
            {
                Lopping()
            }
        
        </>
    )
}
