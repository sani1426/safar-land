import { destination_Slidde_src } from "@/constance";
import React from "react";
import Slider from "react-slick";

function PopDesCarousel() {
  var settings = {
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
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
            destination_Slidde_src.map(img => (
                <div key={img.id}>
                <img src={img.src} alt="" />
              </div>
            ))
        }
      </Slider>
    </div>
  );
}

export default PopDesCarousel;
