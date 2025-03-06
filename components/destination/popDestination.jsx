
import React from 'react';
import { Carousel } from 'antd';


const HeaderCarousel = () => (
  <Carousel autoplay  draggable={true} autoplaySpeed={2000} infinite={true}
  
  >
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
















responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]