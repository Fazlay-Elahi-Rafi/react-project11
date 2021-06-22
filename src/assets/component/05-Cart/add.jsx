import React from "react";

import { useAdds } from "./useAdds";

import add from "../../img/add-01.jpg";
import add2 from "../../img/add-02.jpg";
import add3 from "../../img/add-03.jpg";
import add4 from "../../img/add-04.jpg";

export default function Add() {
  const { click1, click2, click3, click4, funOne, funTwo, funThree, funFour } =
    useAdds();
  return (
    <>
      <div className="card add">
        <div className="col-11 col-lg-9 col-xl-11 pt-lg-5 pt-xl-0 m-auto">
          <div className={`add__layer ${click1 ? "add__show" : "add__hide"}`}>
            <div className="add__img">
              <img src={add} className="img-fluid" alt="add img" />
            </div>
            <div className="add__sub">
              <h4 className="add__title">big sale!</h4>
              <span className="add__offer">50% off</span>
              <button className="add__btn btn">buy</button>
            </div>
          </div>
          <div className={`add__layer ${click2 ? "add__show" : "add__hide"}`}>
            <div className="add__img">
              <img src={add4} className="img-fluid" alt="add img" />
            </div>
            <div className="add__sub">
              <h4 className="add__title">big sale!</h4>
              <span className="add__offer">40% off</span>
              <button className="add__btn btn">buy</button>
            </div>
          </div>
          <div className={`add__layer ${click3 ? "add__show" : "add__hide"}`}>
            <div className="add__img">
              <img src={add3} className="img-fluid" alt="add img" />
            </div>
            <div className="add__sub">
              <h4 className="add__title">big sale!</h4>
              <span className="add__offer">20% off</span>
              <button className="add__btn btn">buy</button>
            </div>
          </div>
          <div className={`add__layer ${click4 ? "add__show" : "add__hide"}`}>
            <div className="add__img">
              <img src={add2} className="img-fluid" alt="add img" />
            </div>
            <div className="add__sub">
              <h4 className="add__title">big sale!</h4>
              <span className="add__offer">30% off</span>
              <button className="add__btn btn">buy</button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="add__list">
            <li>
              <button
                className={`btn ${
                  click1 ? "add__list-active" : "add__list-btn"
                }`}
                onClick={funOne}
              >
                chips
              </button>
            </li>
            <li>
              <button
                className={`btn ${
                  click2 ? "add__list-active" : "add__list-btn"
                }`}
                onClick={funTwo}
              >
                vegetables
              </button>
            </li>
            <li>
              <button
                className={`btn ${
                  click3 ? "add__list-active" : "add__list-btn"
                }`}
                onClick={funThree}
              >
                banana
              </button>
            </li>
            <li>
              <button
                className={`btn ${
                  click4 ? "add__list-active" : "add__list-btn"
                }`}
                onClick={funFour}
              >
                tomatoes
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
