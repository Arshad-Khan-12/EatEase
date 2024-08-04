import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p className="eatease">EatEase</p>
          <p className="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            inventore! Dolorum ipsam beatae eligendi molestias perspiciatis!
            Exercitationem nemo, nostrum, aliquid natus eaque aut delectus
            consequuntur deserunt sit omnis iste facilis.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contact us</h2>
          <ul>
            <li>+91 9176993709</li>
            <li>contact@eatease.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; 2024 Eatease. All rights reserved. | Designed by{" "}
        <span>Arshad Khan</span>
      </p>
    </div>
  );
};

export default Footer;
