// import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
// import { useEffect } from "react";
// import { GetNewArrivalsProducts, newArrivalsCleanUp } from "../../../store/NewArrivals/ArrivalsSlice";

// import CardHome from "../Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import "./NewArrivalsStyle.css"

import data from "../../../../../data/data.json"
import CardHome from '../Card/CardHome/CardHome';


export default function NewArrivals() {
    // Looping Products New Arrivals by Redux Toolkit
    //============================
        // const dispatch = useAppDispatch()
        // const {newArrivals} = useAppSelector( (state)=>state.arrivals )
        // useEffect( ()=>{
        //     dispatch(GetNewArrivalsProducts())
        //     return () => {dispatch(newArrivalsCleanUp())}
        // },[dispatch] )
    // =============================================================

    return (
        <div className="container mx-auto  " >
            <h1 className="my-20 text-4xl font-bold" >New Arrivals</h1>
            <div className="slider-container slider border-x">
                <Swiper 
                autoplay = {true}
                
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
                        data.NewArrivals.map( (items)=>{
                                return(
                                        <SwiperSlide key={items.id} style={{width:"auto !import"}} >
                                            <CardHome id={items.id} img={items.images} name={items.title} price={items.price}  />
                                        </SwiperSlide>
                                )
                            }  )

                        // newArrivals.map( (items)=>{
                        //     return(
                        //             <SwiperSlide key={items.id} style={{width:"auto !import"}} >
                        //                 <Card id={items.id} img={items.images} name={items.title} price={items.price}  />
                        //             </SwiperSlide>
                        //     )
                        // } )
                    }
                </Swiper>

            </div>
        </div>
    )
}
