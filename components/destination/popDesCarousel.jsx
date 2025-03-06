

import React from 'react';
import { Carousel } from 'antd';
import { destination_Slidde_src } from '@/constance';


const contentStyle = {
    height: '100px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    borderRadius : '10px'
  };
  let settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true ,
    slidesToShow: 9,
    slidesToScroll: 2,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

const HeaderCarousel = () => (
  <Carousel {...settings} >

    {
        destination_Slidde_src.map(img => (
            <div className={contentStyle}  key={img.id}>
            <img className='w-full h-full rounded-md object-cover'  src={img.src} alt="" />
          </div>
        ))
    }
   

  </Carousel>
);
export default HeaderCarousel;





