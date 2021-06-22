import React from "react";
import { Link } from "react-router-dom";

import img from "../../img/a-head.jpg";

export default function Head() {
  return (
    <section className="head">
      <div className="card border-0">
        <img className="head__img img-fluid" src={img} alt="img" />
        <div className="card-img-overlay head__overlay">
          <div className="text-center">
            <h1 className="head__title">product</h1>
            <ul className="head__list">
              <li>
                <Link className="head__home" to="/">
                  home
                </Link>
              </li>
              <span className="px-2 text-light">/</span>
              <li>
                <Link className="head__about" to="/product">
                  product
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
