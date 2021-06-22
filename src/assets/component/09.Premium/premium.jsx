import React from "react";

import img from "../../img/pre-01.png";
import Time from "./time";

export default function Premium() {
  return (
    <section className="premium">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-11 m-auto">
            <div className="premium__body">
              <div className="col-12 col-sm-8 col-md-5 m-auto">
                <img className="img-fluid" src={img} alt="tomato" />
              </div>
              <div className="col-lg-7 col-xl-6 m-auto px-3 px-sm-4 px-md-0">
                <span className="premium__offer">60% off on tomatoes</span>
                <h1 className="premium__title">premium red tomatoes</h1>
                <p className="premium__para">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum dolores magnam, obcaecati neque aspernatur aperiam
                  veniam animi at itaque unde blanditiis.
                </p>
                <div className="preimum__counter d-flex justify-content-start text-center">
                  <Time targetDate="Oct 25, 2021" targetTime="18:00:00" />
                </div>
                <button className="premium__btn btn">add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
