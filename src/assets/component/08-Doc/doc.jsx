import React from "react";

import img from "../../img/offer.jpg";
import icon1 from "../../img/icon-01.png";
import icon2 from "../../img/icon-02.png";
import icon3 from "../../img/icon-03.png";
import icon4 from "../../img/icon-04.png";

export default function Doc() {
  return (
    <section className="doc">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="">
              <span className="doc__span">we are foodelio</span>
              <h1 className="doc__title">offer 100% fresh</h1>
              <h2 className="doc__text">organic food</h2>
            </div>
          </div>
          <div className="col-lg-6 m-auto">
            <h5 className="doc__title2">with love & dedication</h5>
            <p className="doc__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              eligendi nisi maiores mollitia eaque ratione impedit et? Incidunt
              explicabo asperiores cupiditate nulla, sunt atque perferendis? Quo
              nemo molestias officia dolor.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-5 col-xl-6 mb-5 mb-lg-0">
            <div className="card doc__card">
              <img src={img} className="img-fluid doc__img" alt="img" />
              <div className="card-img-overlay doc__card-layer">
                <h5 className="doc__card-off">
                  get 30% off <br /> on your order
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="row">
              <div className="col-12 col-sm-6 mb-5 mb-lg-0">
                <div className="doc__item">
                  <div className="doc__item-one">
                    <img src={icon3} className="img-fluid doc__item-top" alt="icon" />
                    <h5 className="doc__item-text">pick & order</h5>
                    <p className="doc__item-disc">
                      This is a wider card with supporting text below as a.
                    </p>
                  </div>
                  <div className="doc__item-icon">
                    <img src={icon2} className="img-fluid" alt="icon" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <div className="doc__item">
                  <div className="doc__item-two">
                    <img src={icon4} className="img-fluid doc__item-top" alt="icon" />
                    <h5 className="doc__item-text">nature food</h5>
                    <p className="doc__item-disc">
                      This is a wider card with supporting text below as a.
                    </p>
                  </div>
                  <div className="doc__item-icon">
                    <img src={icon1} className="img-fluid" alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
