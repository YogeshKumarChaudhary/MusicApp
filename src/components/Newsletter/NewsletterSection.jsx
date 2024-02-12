import React from "react";
import "./NewsletterSection.css";
const NewsletterSection = () => {
  return (
    <section className="newsletter-container">
      <div className="newsletterImageBox">
        {/* Newsletter Bg Image */}
        <img className="newsBanner" src="/images/newsLatter.png" alt="" />
        {/* Newsletter Content */}
        <div className="newsletterContent">
          <h3>Join Our Newsletter</h3>
          <p>Sign up for deals, new products and promotions</p>
          <div className="newsletterInput">
            <div className="inputField">
              <img src="/icons/email.png" alt="" />
              <input type="email" placeholder="Email Address" />
            </div>
            <button>Signup</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
