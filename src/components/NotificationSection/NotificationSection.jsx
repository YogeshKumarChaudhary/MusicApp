import React from "react";
import "./NotificationSection.css";
const NotificationSection = () => {
  return (
    <header className="notification-container">
      <div className="heading">
        <img src="/images/ticket-percent.png" alt="" />
        <p>30% off storewide - Limited time!</p>
      </div>
      <div className="notification-btn">
        <p>Shop Now</p>
        <img src="/icons/arrow-right.png" alt="" />
      </div>
      <img className="close-btn" src="/icons/closeMobile.png" alt="" />
    </header>
  );
};

export default NotificationSection;
