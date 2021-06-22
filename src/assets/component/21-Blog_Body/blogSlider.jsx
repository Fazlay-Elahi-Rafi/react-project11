import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import data from "./data";

import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

export default function BlogSlider() {
  const [state, upState] = useState(data);
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
  };
  return (
    <Slider {...settings}>
      {state.map((item) => {
        const { id, text, link, date, name, image } = item;
        return (
          <>
            <div className="card body__slider border-0" key={id}>
              <div className="body__slider-img">
                <img src={image} className="img-fluid" alt="img" />
              </div>
              <div className="card-img-overlay body__slider-layer">
                <div className="">
                  <div className="">
                    <span className="body__slider-travel">{text}</span>
                  </div>
                  <div className="">
                    <Link to="/" className="body__slider-title">
                      {link}
                    </Link>
                  </div>
                  <div className="d-flex">
                    <div className="">
                      <FaCalendarAlt className="body__slider-icon" />
                      <span className="body__slider-date">{date}</span>
                    </div>
                    <div className="">
                      <FaUserAlt className="body__slider-icon" />
                      <span className="body__slider-name">{name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </Slider>
  );
}
