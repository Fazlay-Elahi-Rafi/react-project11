import React from "react";
import { Link } from "react-router-dom";

import app from "../../img/app_store.png";
import play from "../../img/play_store.png";

export default function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-12 col-xl-4 col-xxl-3 text-center text-xl-start">
            <h1 className="subscribe__title">join our newsletter now</h1>
            <span className="subscribe__span">
              Subscribe now to get updates on promotions andcoupons
            </span>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-5 m-auto m-xl-0 my-5 my-xl-0">
            <div className="d-sm-flex text-center">
              <input
                className="subscribe__inp form-control"
                type="email"
                autoComplete="off"
                placeholder="Your Email Address"
              />
              <button className="subscribe__btn btn mt-4 mt-sm-0">
                subscribe
              </button>
            </div>
          </div>
          <div className="col-sm-9 col-md-6 col-lg-6 col-xl-3 m-auto m-xl-0 d-flex justify-content-evenly justify-content-sm-between justify-content-lg-evenly justify-content-xl-between">
            <Link to="/">
              <img src={app} className="img-fluid" alt="app store" />
            </Link>
            <Link to="/">
              <img src={play} className="img-fluid" alt="play store" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
