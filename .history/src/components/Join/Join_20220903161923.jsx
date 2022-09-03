import React from "react";
import { useRef } from "react";
import "./Join.css";
import emailjs from 

const Join = () => {
  const form = useRef();
  return (
    <div className="Join" id="join-is">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;