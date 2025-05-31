import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import img1 from '../Assets/slider/angel.png';
import img2 from '../Assets/slider/5paisa.png';
import img3 from '../Assets/slider/choice.png';
import img4 from '../Assets/slider/icici.jpg';
import img5 from '../Assets/slider/motilal.png';
import img6 from '../Assets/slider/smcglobal.png';
import img7 from '../Assets/slider/stoxcart.jpg';
import img8 from '../Assets/slider/upstox.jpg';

const products = [
  { id: 1, img: img1,  },
  { id: 2, img: img2, },
  { id: 3, img: img3, },
  { id: 4, img: img4, },
  { id: 5, img: img5,  },
  { id: 6, img: img6,  },
  { id: 7, img: img7,   },
  { id: 8, img: img8,},
];


const AboutSlider = () => {
  return (
<div
  className="py-10 px-5 rounded-xl shadow-lg mx-5 md:mx-20"
  style={{ backgroundColor: "#E8F5E9" }}
>
 
    
     
      
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {products.map((product) => (
         
          <SwiperSlide key={product.id} className="rounded-lg shadow-xl p-5">
            <div className="flex flex-col items-center" >
              <img
                src={product.img}
                alt="Product"
                className="w-40 h-40 object-cover rounded-full shadow-lg transition-transform transform hover:scale-110" style={{borderRadius:'100px'}}
              />
              <p className="text-center text-lg font-semibold mt-4 text-gray-800 font-[Montserrat]">
                {product.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutSlider;
