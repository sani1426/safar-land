

import React from 'react';
import { Carousel } from 'antd';


const HeaderCarousel = () => (
  <Carousel autoplay  draggable={true} autoplaySpeed={2000} infinite={true}>
    <div>
      <img  src="/header-carousel-slide1" alt="" />
    </div>
    <div>
    <img  src="/header-carousel-slide2" alt="" />
    </div>
    <div>
    <img  src="/header-carousel-slide3" alt="" />
    </div>
    <div>
    <img  src="/header-carousel-slide1" alt="" />
    </div>
  </Carousel>
);
export default HeaderCarousel;