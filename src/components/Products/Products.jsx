import React, { useState } from "react";
import css from "./Products.module.css";
import plane from "../../assets/plane.png";
import { ProductsData } from "../../data/product";
import { useAutoAnimate } from "@formkit/auto-animate/react";
function Products() {
  const [menuproducs, setMneuproducs] = useState(ProductsData);
  const parent = useAutoAnimate({
    duration: 250,
    easing: "linear",
    disrespectUserMotionPreference: false,
  });
  const filter = (type) => {
    setMneuproducs((pre) => ProductsData.filter((pro) => pro.type === type));
  };
  return (
    <div className={css.container}>
      <img src={plane} alt="" />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li
            onClick={() => setMneuproducs(ProductsData)}
            className={css.liprod}
          >
            All
          </li>
          <li onClick={() => filter("skin care")} className={css.liprod}>
            Skin Care
          </li>
          <li onClick={() => filter("conditioner")} className={css.liprod}>
            Conditioners
          </li>
          <li onClick={() => filter("foundation")} className={css.liprod}>
            Foundations
          </li>
        </ul>
        <div className={css.list} ref={parent}>
          {menuproducs.map((product) => (
            <div className={css.product} key={product.id}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
