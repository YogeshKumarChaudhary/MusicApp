import React from "react";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  return (
    <div className="product-container">
      <div className="product-upside">
        <div>
          <div className="product-image">
            <img src={data.src} alt="" />
            <div className="product-badges">
              <span>{data.badge}</span>
            </div>
            {data.button && (
              <button className="primary-btn product-btn">{data.button}</button>
            )}
          </div>
        </div>
      </div>
      <div className="product-content">
        <img src="/products/Rating Group.png" alt="" />
        <div>
          <p>{data.name.slice(0, 16) + "..."}</p>
          <p className="product-type">{data.type}</p>
          <p>${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
