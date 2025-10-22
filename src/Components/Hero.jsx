import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import hero from '../assets/Hero-Banner.webp';
import hero4 from '../assets/hero4.jpg';
import hero5 from '../assets/hero5.jpg';
import hero7 from '../assets/hero7.jpg';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Navbar fixed top */}
      <div className="absolute top-10 left-15 w-11/12 z-50">
        <Navbar />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-40 text-white pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4 animate-bounce bg-gradient-to-l from-green-300 to-green-800 bg-clip-text text-transparent">
          GreenNest – Bring Nature to Your Home
        </h1>
        <p className="text-lg md:text-2xl font-medium max-w-2xl drop-shadow-md">
          Explore the world of indoor plants that breathe life into your space.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-screen z-30" 
      >
        {[hero7, hero5, hero, hero4].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt={`slide-${index}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
