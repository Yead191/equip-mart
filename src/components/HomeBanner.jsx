import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import img1 from '../assets/slider/adidas.jpg'
import img2 from '../assets/slider/gm.jpg'
import img3 from '../assets/slider/kookaburra.jpg'
import img4 from '../assets/slider/nb.jpg'
import img5 from '../assets/slider/ventus.jpg'
import img6 from '../assets/slider/img6.jpg'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeBanner() {
  return (
    <div className='my-1'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}
