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
          <li onClick={()=> setMenuOpened}>Home</li>
          <li onClick={()=> setMenuOpened}>Programs</li>
          <li onClick={()=> setMenuOpened}>Why Us</li>
          <li onClick={()=> setMenuOpened}>Plans</li>
          <li onClick={()=> setMenuOpened}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;