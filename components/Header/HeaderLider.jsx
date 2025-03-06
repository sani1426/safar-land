

import React from 'react';
import { Carousel } from 'antd';
import { header_Slidde_src } from '@/constance';

const contentStyle = {
    height: '60vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    width : '100vw',
    borderRadius : '10px'
  };

const HeaderCarousel = () => (
  <Carousel autoplay  draggable={true} autoplaySpeed={2000} infinite={true}>

    {
        header_Slidde_src.map(img => (
            <div className={contentStyle}  key={img.id}>
            <img className='w-full h-full rounded-md object-cover'  src={img.src} alt="" />
          </div>
        ))
    }
   

  </Carousel>
);
export default HeaderCarousel;