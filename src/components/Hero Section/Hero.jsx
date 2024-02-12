import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-container">
      {/* Hero left side */}
      <div className="hero-image">
        <img src="/images/Paste_image.png" alt="" />
      </div>
      {/* Hero right side */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="heading">
            <p>Listen to </p>
            <p>
              the <span>amazing</span>
            </p>
            <p>music sound.</p>
          </h1>
          <p className="sub-text">Exprience music like never before</p>
        </div>
        <button className="primary-btn">Shopping Now</button>
      </div>
    </section>
  );
};

export default Hero;
