import React from "react";

import { GiThreeLeaves } from "react-icons/gi";
import { FaShippingFast, FaDropbox, FaPiggyBank } from "react-icons/fa";
import AboutSlider from "./aboutSlider";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="about__title">about us</h1>
          </div>
        </div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3 about__items">
            <div className="col-10 col-sm-6 col-lg-12 col-xl-10 m-auto mb-5 pb-md-5">
              <GiThreeLeaves className="about__items-icon" />
              <h6 className="about__items-text">always fresh</h6>
              <p className="about__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-10 col-sm-6 col-lg-12 col-xl-10 m-auto">
              <FaShippingFast className="about__items-icon" />
              <h6 className="about__items-text">delivery</h6>
              <p className="about__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center my-5 my-lg-0">
            <AboutSlider />
          </div>
          <div className="col-lg-3 about__items">
            <div className="col-10 col-sm-6 col-lg-12 col-xl-10 m-auto mb-5 pb-md-5">
              <FaDropbox className="about__items-icon" />
              <h6 className="about__items-text">shipping</h6>
              <p className="about__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-10 col-sm-6 col-lg-12 col-xl-10 m-auto">
              <FaPiggyBank className="about__items-icon" />
              <h6 className="about__items-text">win $100</h6>
              <p className="about__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
