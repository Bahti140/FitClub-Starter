import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData.jsx";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* Plans Cards */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}
            <span>{}</span>
            <span></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;