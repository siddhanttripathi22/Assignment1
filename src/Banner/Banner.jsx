import React from "react";
import "./Banner.css";

import filip from "../assests/jessica-radanavong-IchPBHFD0pw-unsplash.svg";
import star3 from "../assests/Star 3.png";
import star4 from "../assests/Star 4.png";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <p> Fresh</p>
        <p className="banner-text">2022</p>
        <p>Look</p>
       
      </div>
     
      <img className="star-4-icon"  src={star4} />
      <div className="extra-div"></div>
      <img className="banner-img" src={filip} />
      <img className="star-icon" src={star3} />
    </div>
  );
};

export default Banner;
