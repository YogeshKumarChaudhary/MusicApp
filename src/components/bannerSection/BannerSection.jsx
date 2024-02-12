import React from 'react';
import "./BannerSection.css"
const BannerSection = () => {
  return (
    <section className='banner-section-container flex'>
      {/* Banner Left Side */}
      <div className="banner-left">
        <img src="/images/bannerSectionImage.jpg" alt="" />
      </div>
      {/* Banner Right Side */}
      <div className="banner-right flex">
        <div className='bannerTop'>
            <span>PROMOTION</span>
            <h2>Hurry up! 40% OFF</h2>
            <p>Thousands of high tech are waiting for you</p>
        </div>
        <div className='bannerTimeContainer'>
            <p className='text'>Offer expires in:</p>
            <div className='bannerTime flex'>
                <div>
                    <p>02</p>
                    <span>Days</span>
                </div>
                <div>
                    <p>12</p>
                    <span>Hours</span>
                </div>
                <div>
                    <p>45</p>
                    <span>Minutes</span>
                </div>
                <div>
                    <p>05</p>
                    <span>Seconds</span>
                </div>
            </div>
        </div>
        <button className='primary-btn banner-btn'>Shop Now</button>
      </div>
    </section>
  );
}

export default BannerSection;
