
import { Outlet } from "react-router-dom"
import FillterByPrice from "../../Components/common/FillterByPrice/FillterByPrice"
import LoopingCategories from "../../Components/common/LoopingCategories/LoopingCategories"


import "./shopStyle.css"

export default function Shop() {
  function ToggleCategories(){
    document.querySelector('.linksOne')?.classList.toggle('open')
  }

  function TogglePrice(){
    document.querySelector('.linksThree')?.classList.toggle('open')
  }

  return (
    <div className="container mx-auto mt-10 shop">
      <h1 className="text-4xl font-bold my-10 pl-10">Products</h1>

      <div className="sort-for-mobile my-5">
          <div className="flex justify-around">

            <div className="sort">
              <h2 onClick={() => ToggleCategories()}>Shop By Categories</h2>
              <nav className="linksOne">
                <ul>
                  <LoopingCategories />
                </ul>
              </nav>
            </div>

            <div className="sort">
              <h2 onClick={() => TogglePrice()} >Shop By Price</h2>
              <nav className="linksThree">
                <ul>
                  <FillterByPrice />
                </ul>
              </nav>
            </div>

          </div>
      </div>


      <div className="sections">
        <div className="sorting-product ">

          <h1>Sorting</h1>
          <hr />

          <div className="shop-by-categories sort">
            <h2>Shop By Categories</h2>
            <nav>
              <ul>
                <LoopingCategories />
              </ul>
            </nav>
          </div>

          <div className="shop-by-price sort">
            <h2>Shop By Price</h2>
            <nav>
              <ul>
                <FillterByPrice />
              </ul>
            </nav>
          </div>

        </div>

        <div className="products container">
          <Outlet />
        </div>

      </div>

    </div>
  )
}
