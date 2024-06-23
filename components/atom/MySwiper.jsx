import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Product from './ImageBox';






const MySwiper = () => {
  return (
    <Swiper
      slidesPerView={3} // Default number of slides to show
      spaceBetween={30} // Space between slides
      pagination={{ clickable: true }}
      navigation
      breakpoints={{
        // When window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        360: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        

      }}
      modules={[Pagination]}
      className="mySwiper w-[1000px] ml-[100px] h-[300px] verflow-scroll  pt-[10px] flex pb-[10px] gap-[20px] "
    >
      <SwiperSlide className=' h-[200px] w-[200px] flex-col gap-[10px]'><Product src="/assits/Images/icon-Optimal-Performance.svg" alt="svg" text1="Optimal Performance" text2="Our efficient solutions optimize your IT processes,streamlining operations and maximizing output. .............." /></SwiperSlide>
      <SwiperSlide className=' h-[200px] w-[200px] flex-col gap-[10px]'><Product src="/assits/Images/icon-Improved-Decision-Making (1).svg" alt="svg" text1="Improved Decision-Making" text2="Gain actionable insights from data analytics to make informed choices that drive business growth." /></SwiperSlide>
      <SwiperSlide className=' h-[200px] w-[200px] flex-col gap-[10px]'><Product src="/assits/Images/icon-Reduced-IT-Costs.svg" alt="svg" text1="Reduced IT Costs" text2="We empower you to optimize your IT spending strategically and maximize the return on your investment." /></SwiperSlide>
      <SwiperSlide className=' h-[200px] w-[200px] flex-col gap-[10px]'><Product src="/assits/Images/icon-Enhanced-Security.svg" alt="svg" text1="Enhanced Security" text2="Protect your valuable assets and maintain regulatory compliance with our robust security measures. ............................................" /></SwiperSlide>
      <SwiperSlide className=' h-[200px] w-[200px] flex-col gap-[10px]'><Product src="/assits/Images/icon-A-Competitive-Edge.svg" alt="svg" text1="A Competitive Edge" text2="Empower Genroar to seamlessly adapt and stay at the forefront of the ever-changing digital landscape." /></SwiperSlide>

    </Swiper>


  )
}

export default MySwiper