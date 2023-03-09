import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaSearchLocation,
  FaMailBulk,
} from "react-icons/fa";
import './FooterStyles.css';

function Footer() {
  return (
    <div className="social">
      <a href="https://herewecode.io/" target="blank">
        <FaFacebook />
      </a>
      <FaLinkedin />
      <FaPhone />
      <FaSearchLocation />
      <FaTwitter />
      <FaMailBulk />
    </div>
  );
}

export default Footer;
