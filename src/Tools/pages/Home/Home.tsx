import landing1 from "../../../assets/banners/bannerImgOne_cleanup.webp"
import landing2 from "../../../assets/banners/bannerImgTwo_cleanup.webp"
import landing3 from "../../../assets/banners/bannerImgThree_cleanup.webp"

import righrImg from "../../../assets/saleImgOne_cleanup.webp"
import leftUpImg from "../../../assets/saleImgTwo_cleanup.webp"
import leftDownImg from "../../../assets/saleImgThree_cleanup.webp"

import ClockImg from "../../../assets/productOfTheYear.webp"

import Slider from "react-slick"
import "./homeStyle.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom"
import NewArrivals from "../../Components/common/NewArrivals/NewArrivals"
import BestSellers from "../../Components/common/Bestsellers/BestSellers"
import SpecialOffers from "../../Components/common/SpecialOffers/SpecialOffers"


export default function Home() {

    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="home">
            <div className="slider-container">
                <Slider {...settings} className="slider">
                    <div className="slide" >
                        <img src={landing1} width={"100%"} height={"100vh"} style={{backgroundRepeat:"no-repeat"}} />
                        <div className="overlay"></div>
                        <div className="info">
                            <h1>Final Offer</h1>
                            <p>up to <span>50%</span> sale for all furniture items</p>
                            <NavLink to={"/shop"} className="btn">Shop Now</NavLink>
                        </div>
                    </div>
                    <div className="slide">
                        <img src={landing2} width={"100%"} height={"100vh"} style={{backgroundRepeat:"no-repeat"}} />
                        <div className="overlay"></div>
                        <div className="info">
                            <h1>Your First <br /> Fashion Order</h1>
                            <p>Use the code:<span>150FF</span> <br/> Easy and FREE Returns  T&Cs apply </p>
                            <NavLink to={"/shop"} className="btn">Shop Now</NavLink>
                        </div>                  
                    </div>

                    <div className="slide" >
                        <img src={landing3} width={"100%"} height={"100vh"} style={{backgroundRepeat:"no-repeat"}} />
                        <div className="overlay"></div>
                        <div className="info">
                            <h1>Get 10% off</h1>
                            <p>Spa and Salon Home Services With Prime <br/> Discount Automotically applied at Checkout</p>
                            <p>amazon home services | amazon prime</p>
                            <NavLink to={"/shop"} className="btn">Shop Now</NavLink>
                        </div>
                    </div>

                </Slider>
            </div>

            <div className="features container mx-auto mt-5 flex justify-between">
                <div className="flex  ">
                    <span>2</span>
                    <p className="pl-3">Two Years Warranty</p>
                </div>
                <div className="flex">
                    <span>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 19V21.2C8.5 21.48 8.5 21.62 8.4455 21.727C8.39757 21.8211 8.32108 21.8976 8.227 21.9455C8.12004 22 7.98003 22 7.7 22H5.8C5.51997 22 5.37996 22 5.273 21.9455C5.17892 21.8976 5.10243 21.8211 5.0545 21.727C5 21.62 5 21.48 5 21.2V19M19 19V21.2C19 21.48 19 21.62 18.9455 21.727C18.8976 21.8211 18.8211 21.8976 18.727 21.9455C18.62 22 18.48 22 18.2 22H16.3C16.02 22 15.88 22 15.773 21.9455C15.6789 21.8976 15.6024 21.8211 15.5545 21.727C15.5 21.62 15.5 21.48 15.5 21.2V19M3 12H21M3 5.5H21M6.5 15.5H8M16 15.5H17.5M7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V6.8C21 5.11984 21 4.27976 20.673 3.63803C20.3854 3.07354 19.9265 2.6146 19.362 2.32698C18.7202 2 17.8802 2 16.2 2H7.8C6.11984 2 5.27976 2 4.63803 2.32698C4.07354 2.6146 3.6146 3.07354 3.32698 3.63803C3 4.27976 3 5.11984 3 6.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                    <p className="pl-3">Free Shopping</p>
                </div>
                <div className="flex">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38"/></svg>
                    </span>
                    <p className="pl-3">Two Years Warranty</p>
                </div>
            </div>
            <hr />

            <div className="section-two container mx-auto">

                <div className="right">
                    <img src={righrImg}/>
                    <div className="info-right">
                        <h1>Phones Sale</h1>
                        <p>Up to <span>30%</span> Sale For all Phones!</p>
                        <Link to={"/shop"} className="btn">Shop Now</Link>
                    </div>
                </div>

                <div className="left">

                    <div className="left-up">
                        <img src={leftUpImg}/>
                        <div className="info-left">
                            <h1>Electronics Sale</h1>
                            <p>Up to <span>70%</span> Sale For all Electronics!</p>
                            <Link to={"/shop"} className="btn">Shop Now</Link>
                        </div>
                    </div>

                    <div className="left-down">
                        <img src={leftDownImg} />
                        <div className="info-left-down info-left">
                            <h1>Offer</h1>
                            <p>Up to <span>50%</span> Sale For all Furniture Items!</p>
                            <Link to={"/shop"} className="btn">Shop Now</Link>
                        </div>
                    </div>
                </div>

            </div>
            <hr />

            <div className="">
                <NewArrivals />
            </div>

            <div className="">
                <BestSellers />
            </div>

            <div className="product-year container mx-auto ">
                <img src={ClockImg}/>
                <div className="info">
                    <h2>Product The Year</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. 
                        Excepturi quibusdam nam est! Dolor excepturi, 
                        sequi obcaecati iure voluptas magnam sit commodi tempora optio eligendi assumenda pariatur molestias beatae, est velit?
                    </p>
                    <Link to={"/shop"} className="btn">Shop Now</Link>
                </div>
            </div>
            
            <div className="">
                <SpecialOffers />
            </div>
        </div>
    );
}