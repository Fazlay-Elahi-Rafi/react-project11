import React from "react";

import Slider from "react-slick";

import Props from "./props";

import img from "../../img/bg-01.jpg";
import img2 from "../../img/bg-02.jpg";
import img3 from "../../img/bg-03.jpg";

export default function HeaderSlider() {
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
      <Props
        img={img}
        wel="welcome"
        title="healthy organic roasted cashews"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        btn="book a table"
      />
      <Props
        img={img2}
        wel="welcome"
        title="healthy organic vegetables"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        btn="book a table"
      />
      <Props
        img={img3}
        wel="welcome"
        title="high quality meals"
        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        btn="book a table"
      />
    </Slider>
  );
}
