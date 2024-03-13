import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
function Hero() {
  const transiton = { duration: 3, type: "spring" };
  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercsie joy man children
            rejoiced.{" "}
          </span>
        </div>
      </div>
      <div className={css.wrapper}>
        <motion.div
          initial={{ top: "1rem" }}
          whileInView={{ top: "-0.1rem" }}
          className={css.blueCircle}
          transition={transiton}
        ></motion.div>
        <motion.img
          initial={{ top: "2rem" }}
          whileInView={{ top: "0rem" }}
          transition={transiton}
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          initial={{ right: "10%" }}
          whileInView={{ right: "5%" }}
          transition={transiton}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
