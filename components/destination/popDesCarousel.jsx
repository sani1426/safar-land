

import React from 'react';
import { Carousel } from 'antd';
import { destination_Slidde_src } from '@/constance';
import Image from 'next/image';



const contentStyle = {
 
    color: '#fff',
   
    textAlign: 'center',
    borderRadius : '10px',
  margin : '.7rem'
  };
  let settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true ,
    slidesToShow: 8,
    slidesToScroll: 2,
    initialSlide: 0,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
            <div className={` mx-auto text-center ${contentStyle}`}  key={img.id}>
             
            <Image   className=' w-[135px] h-[105px] md:w-[150px] md:h-[135px] lg:w-[135px] lg:h-[105px] rounded-md object-cover'  src={img.src} alt="carousel-image" />
            
            <p className='text-orange-500 font-semibold pt-[10px]'>{img.title}</p>
          </div>
        ))
    }
   

  </Carousel>
);
export default HeaderCarousel;

 



