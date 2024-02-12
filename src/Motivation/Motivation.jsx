import React, { useState } from "react";
import motivation_1 from "../images/Motivation/1.jpg";
import motivation_2 from "../images/Motivation/2.jpg";
import motivation_3 from "../images/Motivation/3.jpg";
import motivation_4 from "../images/Motivation/4.jpg";
import motivation_5 from "../images/Motivation/5.jpg";
import motivation_6 from "../images/Motivation/6.jpg";
import motivation_7 from "../images/Motivation/7.jpg";
import motivation_8 from "../images/Motivation/8.jpg";
import motivation_9 from "../images/Motivation/9.jpg";
import motivation_10 from "../images/Motivation/10.jpg";
import "./Motivation.css";
import icons from "../images/icons.svg";

export default function Motivation() {
  const images = [
    motivation_1,
    motivation_2,
    motivation_3,
    motivation_4,
    motivation_5,
    motivation_6,
    motivation_7,
    motivation_8,
    motivation_9,
    motivation_10,
  ];
  const [imageIndex, setImageIndex] = useState(0);

  const changeImageToRight = () => {
    if (imageIndex !== images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };
  const changeImageToLeft = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const sliderItem = [];
  for (let i = 0; i < imageIndex + 1; i++) {
    sliderItem.push(<div className="sliderDiv" key={i}></div>);
  }

  return (
    <div className="motivation">
      <div className="motivation__container">
        <svg className="arrowToLeft" onClick={changeImageToLeft}>
          <use xlinkHref={`${icons}#arrowToLeft`} />
        </svg>
        <img
          src={images[imageIndex]}
          alt="motivation"
          className="motivation__img"
        />
        <svg className="arrowToRight" onClick={changeImageToRight}>
          <use xlinkHref={`${icons}#arrowToRight`} />
        </svg>
      </div>
      <div className="sliderNav">
        {sliderItem}
        <span>HARD WORK</span>
      </div>
    </div>
  );
}
