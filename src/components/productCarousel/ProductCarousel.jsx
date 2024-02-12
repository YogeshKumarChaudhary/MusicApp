import React from "react";
import "./ProductCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../common/ProductCard";

const ProductCarousel = () => {
  const ProductData = [
    {
      src: "/products/product1.png",
      name: "Skullcandy - Crusher anc 2",
      type: "wireless headphones",
      price: 299.99,
      badge:"NEW",
      button:"Add To Cart"
    },
    {
      src: "/products/product2.png",
      name: "Beats",
      type: "Studio Pro",
      price: 349.99,
      badge:"NEW"
    },
    {
      src: "/products/product3.png",
      name: "Sony - WH-CH720N Wireless ",
      type: "Noise Canceling",
      price: 149.99,
      badge:"NEW"
    },
    {
      src: "/products/product4.png",
      name: "Skullcandy - Rail True Wireless",
      type: "Earbuds",
      price: 79.99,
      badge:"NEW"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 874,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="product-container container">
      <div>
        <h3 className="section-heading">New Arrivals</h3>
      </div>
      <Slider {...settings}>
        {ProductData.map((data, index) => (
          // pass productData in Product component
          <ProductCard key={index} data={data} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;
