import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}

          onClick={()=>setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={()=> set}>Home</li>
          <li onClick={()=> set}>Programs</li>
          <li onClick={()=> set}>Why Us</li>
          <li onClick={()=> set}>Plans</li>
          <li onClick={()=> set}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;