import React, { useState, useEffect } from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import useMediaQuery from "@mui/material/useMediaQuery";
function Header() {
  const [showmenu, setShowmenu] = useState(false);
  const screen = useMediaQuery("(max-width:640px)");
  const [scrollheader, setscrollheader] = useState(false);
  const [scrollheight, setscrollheight] = useState(0);
  const togglemenu = () => {
    setShowmenu((pre) => !pre);
  };
  const changeheader = () => {
    if (window.scrollY >= 40) {
      console.log(window.scrollY);
      setscrollheader(true);
    } else {
      setscrollheader(false);
    }
  };
  const scrollsfunc = () => {
    setscrollheight(window.scrollY);
    if (window.scrollY - 145 <= 0) {
      // console.log(window.scrollY - 144);
      setscrollheight(window.scrollY - 145);
    } else {
      setscrollheight(0);
    }
  };
  const scrolltop = () => {
    // animateScroll.scrollToTop();
  };
  useEffect(() => {
    window.addEventListener("scroll", changeheader);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scrollsfunc);
  }, []);

  return (
    <div
      className={`${css.container} ${
        scrollheader ? `${css.scrollheaderdown}` : ""
      } `}
      style={{
        top: `${scrollheader ? scrollheight : "0"}px`,
      }}
    >
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>
      <div className={css.right}>
        <div className={css.bars} onClick={togglemenu}>
          <FaBars />
        </div>
        <ul
          className={css.menu}
          style={{
            display: screen ? (!showmenu ? "none" : "inherit") : "inherit",
          }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
        <input type="text" className={css.search} placeholder="search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </div>
  );
}

export default Header;
