import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import snakPlant1 from '../assets/snake-plant1.jpg'
import snakPlant2 from '../assets/snake-plant2.jpg'
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                autoplay={{ delay: 3000 }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className='absolute top-10 left-15 z-50 w-11/12'>
                    <Navbar></Navbar>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-40 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4 animate-bounce">
                        GreenNest – Bring Nature to Your Home
                    </h1>
                    <p className="text-lg md:text-2xl font-medium max-w-2xl drop-shadow-md">
                        Explore the world of indoor plants that breathe life into your space.
                    </p>
                </div>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img className='w-screen h-screen' src={snakPlant1} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img className='w-screen h-screen' src={snakPlant2} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img className='w-screen h-screen' src={snakPlant1} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center'>
                        <img className='w-screen h-screen' src={snakPlant2} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;