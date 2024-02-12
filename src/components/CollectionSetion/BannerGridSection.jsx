import React from "react";
import "./BannerGridSection.css";
import CollectionBtn from "../common/CollectionBtn";
import GridSmallBox from "../common/GridSmallBox";
const BannerGridSection = () => {
  return (
    <section className="container banner-container">
      <div>
        <h3 className="section-heading">Shop Collection</h3>
      </div>
      <div className="banner-collection">
        <div className="grid-main">
          <div className="mainImage">
            <img src="/bannerGrid/mainImage.png" alt="" />
          </div>
          <div className="banner-collection-content">
            <h4>Headband</h4>
            <CollectionBtn />
          </div>
        </div>
        <div className="grid-small">
          {/* Pass bannerData in Gridsmall Component */}
          <GridSmallBox imgSrc="/bannerGrid/smallGrid1.png" text="Earbuds" />
          <GridSmallBox
            imgSrc="/bannerGrid/smallGrid2.png"
            text="Accessories"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerGridSection;
