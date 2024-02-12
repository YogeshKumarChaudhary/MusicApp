import React from "react";
import "./BestSeller.css";
import ProductCard from "../common/ProductCard";

const BestSeller = () => {
  // Top Left Data
  const topLeftData = [
    {
      src: "/products/product1.png",
      name: "Skullcandy - Crusher anc 2",
      type: "wireless headphones",
      price: 299.99,
      badge:"HOT"
    },
    {
      src: "/products/product2.png",
      name: "Beats",
      type: "Studio Pro",
      price: 349.99,
      badge:"HOT"
    },
  ];

  // Top RIght Data
  const topRightData = [
    {
      src: "/products/product3.png",
      name: "Sony - WH-CH720N Wireless ",
      type: "Noise Canceling",
      price: 149.99,
      badge:"HOT"
    },
    {
      src: "/products/product4.png",
      name: "Skullcandy - Rail True Wireless",
      type: "Earbuds",
      price: 79.99,
      badge:"HOT"
    },
  ];

  // Bottom Left Data
  const bottomLeftData = [
    {
      src: "/products/product5.png",
      name: "Beats",
      type: "Studio Pro",
      price: 249.99,
      badge:"HOT"
    },
    {
      src: "/products/product6.png",
      name: "JBL Reflect Flow Pro+ Bluetooth",
      type: "Truly Wireless Sports",
      price: 179.95,
      badge:"HOT"
    },
  ];

  // Bottom Right Data
  const bottomRightData = [
    {
      src: "/products/product7.png",
      name: "Bose",
      type: "QuietComfort HeadPhones",
      price: 349.00,
      badge:"HOT"
    },
    {
      src: "/products/product8.png",
      name: "AKG",
      type: "Y600NC Wireless",
      price: 349.99,
      badge:"HOT"
    },
  ];
  return (
    <section className="container best-seller-container">
      <div>
        <h3 className="section-heading">Best Seller</h3>
      </div>
      {/* Best Seller Top */}
      <div className="bestBoxs">
        {/* Best Seller Top left Side */}
        <div className="best-left">
          {topLeftData.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
        <div className="best-right">
        {/* Best Seller Top right Side */}
          {topRightData.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
      </div>
      {/* Best Seller Bottom */}
      <div className="bestBoxs">
        {/* Best Seller Bottom left Side */}
        <div className="best-left">
          {bottomLeftData.map((item, i) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
        {/* Best Seller Bottom Right Side */}
        <div className="best-right">
          {bottomRightData.map((item,i) => (
            <ProductCard key={i} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
