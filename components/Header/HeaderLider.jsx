

import React from 'react';
import { Carousel } from 'antd';
import { header_Slidde_src } from '@/constance';


const HeaderCarousel = () => (
  <Carousel autoplay  draggable={true} autoplaySpeed={2000} infinite={true}>

    {
        header_Slidde_src.map(img => (
            <div  key={img.id}>
            <img  src={img.src} alt="" />
          </div>
        ))
    }
   

  </Carousel>
);
export default HeaderCarousel;