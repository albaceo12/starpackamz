import React from "react";
import css from "./Testimonials.module.css";
import hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
function Testimonials() {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Seedily say has sutable disposal and boy. Excercise joy man children
            rejoiced.
          </span>
        </div>
        <img src={hero} alt="" />
        <div className={css.container}>
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className={css.reviews}>Reviews</div>
      <div className={css.carousel}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tcarousel}
          breakpoints={{
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
