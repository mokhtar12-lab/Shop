
import data from "../../../../../data/data.json"

interface IState {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SetResults: any
}

export default function SearchBar({SetResults}:IState){
    const products = data.Products

    function HandlierSerch(value:string) {
            const resulte = products.filter( (items) =>{
                return items && items.title && items.title.toLowerCase().includes(value)
            } )

            SetResults(resulte)
        
    }

    return (
        <>
            <input type="text" placeholder="search"  onChange={(e) => HandlierSerch(e.target.value)} />
        </>
    )
}
