import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brand.css";

const Brand = () => {
  const brandImages = [
    "/brands/logo 04.png",
    "/brands/logo 01.png",
    "/brands/logo 05.png",
    "/brands/logo 02.png",
    "/brands/logo 03.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="brand-container">
      {/* slider of Brands */}
      <Slider {...settings}>
        {brandImages.map((src, index) => (
          <div key={index} className="sliderImages">
            <img src={src} alt={`Brand ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
