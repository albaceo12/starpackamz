import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { SliderProducts } from "../../data/product";
import "./Slider.css";
function Slider() {
  return (
    <div className="s_container">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        loop={true}
        slidesPerGroup={1}
        spaceBetween={40}
        className="my-swiper"
        breakpoints={{
          856: {
            slidesPerView: 3,
          },
          460: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {SliderProducts.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>shop now</div>
            </div>
            <img src={slide.img} alt="product" className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
