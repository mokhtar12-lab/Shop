// import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
// import { useEffect } from "react";
// import { BestSellerCleanUp, GetBestSellerProducts } from "../../../store/BestSeller/BestSellerSlice";

// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper-bundle.css"

import "./bestStyle.css"

import data from "../../../../../data/data.json"
import { EffectCoverflow, Pagination } from 'swiper/modules';
import CardHome from '../Card/CardHome/CardHome';


export default function BestSellers() {
    // Looping Products Best Sellers by Redux Toolkit
    //============================
        // const dispatch = useAppDispatch()
        
        // const {bestSeller} = useAppSelector( state=>state.bestSeller )
        
        // useEffect( ()=>{
        //     dispatch(GetBestSellerProducts())
        //     return () =>{dispatch(BestSellerCleanUp())}
        // },[dispatch] )
    // =============================================================


    
    return (
        <div className="container mx-auto my-20">
            <h1 className="my-20 text-4xl font-bold" >Our Bestsellers</h1>
            <div className="slider-container slider">
                <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"

                >
                    {
                        data.BestSellers.map( (items)=>{
                                return(
                                    <SwiperSlide key={items.id}>
                                        <CardHome id={items.id} img={items.images} name={items.title} price={items.price}/>
                                    </SwiperSlide>
                                )
                            }  )
                        // bestSeller.map( (items)=>{
                        //     return(
                        //         <SwiperSlide key={items.id}>
                        //             <Card id={items.id} img={items.images} name={items.title} price={items.price}/>
                        //         </SwiperSlide>
                        //     )
                        // } )
                    }


                </Swiper>
            </div>
        </div>
    )
}
