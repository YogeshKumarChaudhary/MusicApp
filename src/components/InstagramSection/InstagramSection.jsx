import React from 'react';
import "./InstagramSection.css"
const InstagramSection = () => {
  return (
    <section className='container instagram-container'>
      {/* Insta Top */}
      <div className="instaTop">
        <span>NEWSFEED</span>
        <h3>Instagram</h3>
        <p>Follow us on social media for more discount & promotions</p>
        <div>@3legant_official</div>
      </div>
      {/* Insta Bottom */}
      <div className="instaBottom">
        <div className="instaBox">
            <img src="/images/insta1.png" alt="" />
        </div>
        <div className="instaBox">
            <img src="/images/insta2.png" alt="" />
        </div>
        <div className="instaBox">
            <img src="/images/insta3.png" alt="" />
        </div>
        <div className="instaBox">
            <img src="/images/insta4.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
