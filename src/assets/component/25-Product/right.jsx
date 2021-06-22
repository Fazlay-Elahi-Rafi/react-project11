import React from "react";

import add from "../../img/product-add.jpg";

export default function Left() {
  return (
    <>
      <div className="col-12 product__right">
        <div className="row my-5 m-auto">
          <h1 className="product__right-title">category</h1>
          <div className="col-12">
            <ul className="product__right-list">
              <li>
                <input
                  className="product__right-box form-check-input"
                  type="checkbox"
                />
                <label className="product__right-label">Fresh Fruit (17)</label>
              </li>
              <li>
                <input
                  className="product__right-box form-check-input"
                  type="checkbox"
                />
                <label className="product__right-label">
                  Fresh Salad & Dips (10)
                </label>
              </li>
              <li>
                <input
                  className="product__right-box form-check-input"
                  type="checkbox"
                />
                <label className="product__right-label">
                  Milk, Butter & Eggs (20)
                </label>
              </li>
              <li>
                <input
                  className="product__right-box form-check-input"
                  type="checkbox"
                />
                <label className="product__right-label">
                  Fresh Salad & Dips (19)
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="row my-5 py-4 m-auto">
          <h1 className="product__right-title">price</h1>
          <div className="col-9 col-sm-7 col-md-6 col-lg-5 col-xl-8">
            <span className="product__right-price">10$ - 100$</span>
            <input type="range" className="product__right-range" />
          </div>
        </div>
        <div className="row my-5 m-auto">
          <h1 className="product__right-title">tags</h1>
          <div className="col-xl-7 col-xxl-9">
            <ul className="product__right-tag--list">
              <li>
                <button className="btn">bakery</button>
              </li>
              <li>
                <button className="btn">bkery</button>
              </li>
              <li>
                <button className="btn">coconut</button>
              </li>
              <li>
                <button className="btn">cupcake</button>
              </li>
              <li>
                <button className="btn">sugar flower</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mb-5 m-3 m-xl-0">
          <div className="col-10 col-sm-7 col-md-5 col-xl-10 m-xl-auto">
            <div className="card border-0">
              <img src={add} className="img-fluid" alt="img" />
              <div className="card-img-overlay product__right-add--layer">
                <div className="m-3">
                  <h4 className="product__right-add--title">big sale!</h4>
                  <span className="product__right-add--offer">50% off</span>
                  <button className="product__right-add--btn btn">buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
