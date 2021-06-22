import React from "react";

import img from "../../img/main.jpg";
import icon from "../../img/icon-05.png";
import icon2 from "../../img/icon-06.png";
import icon3 from "../../img/icon-07.png";
import icon4 from "../../img/icon-08.png";

export default function Welcome() {
  return (
    <section className="welcome">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="welcome__title">welcome our shop</h1>
          </div>
        </div>

        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3 welcome__items">
            <div className="col-11 col-sm-6 col-lg-12 col-xl-12 m-auto mb-5 pb-md-5">
              <img
                src={icon}
                className="welcome__items-icon img-fluid"
                alt=""
              />
              <h6 className="welcome__items-text">healthy meals everyday</h6>
              <p className="welcome__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-11 col-sm-6 col-lg-12 col-xl-12 m-auto">
              <img
                src={icon2}
                className="welcome__items-icon img-fluid"
                alt=""
              />
              <h6 className="welcome__items-text">fresh organic 100%</h6>
              <p className="welcome__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-center my-5 my-lg-0">
            <img src={img} className="img-fluid" alt="img" />
          </div>
          <div className="col-lg-3 welcome__items">
            <div className="col-11 col-sm-6 col-lg-12 col-xl-12 m-auto mb-5 pb-md-5">
              <img
                src={icon3}
                className="welcome__items-icon img-fluid"
                alt=""
              />
              <h6 className="welcome__items-text">
                the most stable price in the market
              </h6>
              <p className="welcome__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-11 col-sm-6 col-lg-12 col-xl-12 m-auto">
              <img
                src={icon4}
                className="welcome__items-icon img-fluid"
                alt=""
              />
              <h6 className="welcome__items-text">
                everything is enteren for the day
              </h6>
              <p className="welcome__items-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
