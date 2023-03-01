import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { albums } from "../assets/albums";
import { Album } from "./Styled";
import FlipCard from "./FlipCard";

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        
          {albums.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <Album>
                  <FlipCard slide={slide}/>
                </Album>
              </SwiperSlide>
            );
          })}
        
      </Swiper>
    </>
  );
}

export default Slider;