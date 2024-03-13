import React from "react";
import css from "./Footer.module.css";
import logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
function Footer() {
  return (
    <div className={css.cfooterwrapper}>
      <hr />
      <div className={css.footer}>
        <div className={css.logo}>
          <img src={logo} alt="" />
          <span>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngline}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={css.pngline}>
              <PhoneIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
            <span className={css.pngline}>
              <InboxIcon className={css.icon} />
              <span>111 north avenue Orlando, FL 32801</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngline}>
              <LoginIcon className={css.icon} />
              <span>Sign in</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngline}>
              <UserIcon className={css.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngline}>
              <LinkIcon className={css.icon} />
              <span>Safety privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span>Copyright ©2024 by Amazon, Inc. </span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
}

export default Footer;
