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
      <a href="https://herewecode.io/" target="blank" className="color-footer">
        <FaFacebook />
      </a>
      <a>
      <FaLinkedin />
      </a>
      <a>
      <FaPhone />
      </a>
     
     <a>
     <FaSearchLocation />
     </a>
     <a>
     <FaTwitter />
     </a>
      <a>
      <FaMailBulk />
      </a>
      
    </div>
  );
}

export default Footer;
