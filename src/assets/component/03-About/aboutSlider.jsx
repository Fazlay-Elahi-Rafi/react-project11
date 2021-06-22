import React from "react";

import Slider from "react-slick";

import img from "../../img/about-01.png";
import img2 from "../../img/about-02.png";
import img3 from "../../img/about-03.png";

export default function AboutSlider() {
  var settings = {
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slick-slide__line">
          <img
            src={img}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="slick-slide__line">
          <img src={img2} className="img-fluid" alt="" />
        </div>
        <div className="slick-slide__line">
          <img src={img3} className="img-fluid" alt="" />
        </div>
      </Slider>
    </>
  );
}
