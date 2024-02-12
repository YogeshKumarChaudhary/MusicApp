import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container">
        {/* Footer Top */}
        <div className="footerTop">
          {/* Footer Top Left Side */}
          <div className="logo">
            <div>3legant.</div>
            <span></span>
            <p>Headphone Store</p>
          </div>
          {/* Footer Top Right Side */}
          <div className="rightNav">
            <li>Home</li>
            <li>Shop</li>
            <li>Product</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footerBottom">
          {/* Footer Bottom left side*/}
          <div className="copyright">
            <p>Copyright &copy; 2023 3legant.All right reserved</p>
            <div className="terms">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
          {/* Footer Bottom Right side*/}
          <div className="social">
            <img src="/footer/instagram.png" alt="" />
            <img src="/footer/facebook.png" alt="" />
            <img src="/footer/youtube.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
