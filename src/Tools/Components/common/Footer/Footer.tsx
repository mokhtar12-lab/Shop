import { NavLink } from "react-router-dom"
import "./footerStyle.css"
import LoopingCategories from "../LoopingCategories/LoopingCategories"

export default function Footer() {
    return (
        <div className="footer">

            <div className="info container mx-auto">
                <div className="more-about-shopping">
                    <h2>More about Orebi Shop</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim sint ab ullam, numquam nesciunt in.
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>            
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-4.42 5.8a3.28 3.28 0 0 0-3.2 4.03A9.32 9.32 0 0 1 5.61 6.4a3.26 3.26 0 0 0 1.02 4.38 3.27 3.27 0 0 1-1.49-.4v.03a3.28 3.28 0 0 0 2.64 3.22 3.3 3.3 0 0 1-1.49.06 3.29 3.29 0 0 0 3.07 2.28 6.59 6.59 0 0 1-4.86 1.36 9.29 9.29 0 0 0 5.03 1.47c6.04 0 9.34-5 9.34-9.34v-.42a6.65 6.65 0 0 0 1.63-1.7c-.59.26-1.22.44-1.89.52.68-.41 1.2-1.05 1.45-1.82-.64.38-1.34.65-2.09.8a3.28 3.28 0 0 0-2.4-1.04z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zm-7.7 7h-.6l-1.1.01c-1.48.03-3.7.1-4.46.29-.65.16-1.15.65-1.33 1.26-.18.64-.25 1.7-.29 2.46l-.02.82v.75c.03.76.1 2.09.31 2.85.18.61.68 1.1 1.33 1.26.74.19 2.87.26 4.34.29l1.41.01h1.16c1.45-.03 4-.09 4.81-.3a1.84 1.84 0 0 0 1.33-1.26c.2-.75.28-2.05.3-2.82v-.93c0-.67-.06-2.26-.3-3.13a1.84 1.84 0 0 0-1.33-1.26 25.9 25.9 0 0 0-3.88-.28L12.3 7zM10.46 9.9L14.39 12l-3.92 2.11V9.89z"/></svg>
                </div>

                <div className="shop">
                    <h2>Shop</h2>
                    <nav>
                        <ul>
                            <LoopingCategories />
                        </ul>
                    </nav>
                </div>

                <div className="account">
                    <h2>Your Account</h2>
                    <nav>
                        <ul>
                            <NavLink to={"/profile"}>Profile</NavLink>
                            <NavLink to={"/cart"}>Orders</NavLink>
                            <NavLink to={"/shop/special-offers"}>Payment Options</NavLink>
                        </ul>
                    </nav>
                </div>

                <div className="subscribe">
                    <h2>Subscribe to our newsletter.</h2>
                    <p>A at pellentesque et mattis porta enim elementum.</p>
                    <form>
                        <input className="input" type="email" placeholder="Incert Your email....*"/>
                        <input className="submit" type="submit" value={"Subscribe"}/>
                    </form>
                </div>
            </div>

            <div className="copy-write container mx-auto">
                <hr />
                <p className="text-center mt-5">Copyright 2022 | Orebi shopping | All Rights Reserved 
                </p>
            </div>

        </div>
    )
}
