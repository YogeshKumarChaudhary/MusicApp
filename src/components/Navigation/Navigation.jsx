import React, { useEffect, useState } from "react";
import "./Navigation.css";
const Navigation = () => {
  const [menu, setMenu] = useState(false);

  // When user Scroll close Menu
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setMenu(scrollTop < 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navigation-container ${menu ? "menuOpen" : null}`}>
      <div className="logo">
        <img
          onClick={() => setMenu(!menu)}
          className="nav-menu"
          src="/icons/menu-line-horizontal.png"
          alt=""
        />
        3legant.
      </div>
      <div className="nav-items">
        <li className="active menuItem">Home</li>
        <div className="with-icon menuItem">
          <li>Shop</li>
          <img src="/icons/chevron-down.png" alt="" />
        </div>
        <div className="with-icon menuItem">
          <li>Product</li>
          <img src="/icons/chevron-down.png" alt="" />
        </div>
        <li className="menuItem">Contact Us</li>

        {/* Menu in Mobile */}
        {menu && (
          <>
            <div className="menuContainer">
              {/* Menu BottomTop */}
              <div className="menuTop">
                <div className="cart menuItem">
                  <li>Cart</li>
                  <div className="cartIcons">
                    <img src="/icons/shopping bag.png" alt="" />
                    <img src="/icons/Frame 3.png" alt="" />
                  </div>
                </div>
                <div className="cart menuItem">
                  <li>Wishlist</li>
                  <div className="cartIcons">
                    <img src="/icons/shopping bag.png" alt="" />
                    <img src="/icons/Frame 3.png" alt="" />
                  </div>
                </div>
              </div>
              <button className="primary-btn">Sign In</button>
              <div className="menu-social">
                <img src="/icons/instagram.png" alt="" />
                <img src="/icons/facebook.png" alt="" />
                <img src="/icons/youtube.png" alt="" />
              </div>
            </div>
            <div className="searchBar">
              <img src="/icons/search 02.png" alt="" />
              <input type="text" placeholder="Search" />
            </div>
          </>
        )}
      </div>

      <div className="nav-icons">
        <p className="onlyDesktop">
          <img src="/icons/search 02.png" alt="" />
        </p>
        <p className="onlyDesktop">
          <img src="/icons/user-circle.png" alt="" />
        </p>
        {menu ? (
          <p>
            <img
              onClick={() => setMenu(false)}
              className="menuCloseBtn"
              src="/icons/closeMobile.png"
              alt=""
            />
          </p>
        ) : (
          <>
            <p>
              <img src="/icons/shopping bag.png" alt="" />
            </p>
            <p>
              <img src="/icons/Frame 3.png" alt="" />
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
