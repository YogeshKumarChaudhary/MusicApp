import React from "react";
import CollectionBtn from "./CollectionBtn";

const GridSmallBox = ({ imgSrc, text }) => {
  return (
    <div className="grid-small-up">
      <div className="smallImage">
        <img src={imgSrc} alt="" />
      </div>
      <div className="banner-collection-small-content">
        <h4>{text}</h4>
        <CollectionBtn />
      </div>
    </div>
  );
};

export default GridSmallBox;
