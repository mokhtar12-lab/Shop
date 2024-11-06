// import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
// import { useEffect } from "react";
// import { GetSpecialOffersProducts, SpecialOffersCleanUp } from "../../../store/SpecialOffers/SpecialOffersSlice";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./specialStyle.css"
import data from "../../../../../data/data.json"
import CardHome from "../Card/CardHome/CardHome";

export default function SpecialOffers() {
    // Looping Products Special offers by Redux Toolkit
    //============================
        // const dispatch = useAppDispatch()
        // const {SpecialOffers} = useAppSelector( state=> state.specialOffers )

        // useEffect( ()=>{
        //     dispatch(GetSpecialOffersProducts())
        //     return ()=>{ dispatch(SpecialOffersCleanUp()) }
        // },[dispatch] )
    // =============================================================

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold my-20">Special Offers</h1>
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
                        data.SpecialOffers.map( (items)=>{
                                return(
                                    <SwiperSlide key={items.id}>
                                        <CardHome id={items.id} img={items.images} name={items.title} price={items.price}/>
                                    </SwiperSlide>
                                )
                            } )
                        // SpecialOffers.map( (items)=>{
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
