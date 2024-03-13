import React from "react";
import css from "./Virtual.module.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import After from "../../assets/after.png";
import Before from "../../assets/before.png";
function Virtual() {
  return (
    <div className={css.virtual}>
      <div className={css.left}>
        <span>Virtual Try-On </span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src={shade} alt="" />
      </div>
      <div className={css.right}>
        <div className={css.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
}

export default Virtual;
