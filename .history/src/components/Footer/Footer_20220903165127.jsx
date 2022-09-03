import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="Footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;