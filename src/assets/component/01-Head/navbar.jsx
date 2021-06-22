import React from "react";

import { Link } from "react-router-dom";

import { FaHeadset } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <section className="nav d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <ul className="nav__list">
                <li>
                  <Link className="nav__list-active" to="/">
                    home
                  </Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/blog">blog</Link>
                </li>
                <li>
                  <Link to="/product">product</Link>
                </li>
                <li>
                  <Link to="/cart">cart</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-5 text-end">
              <FaHeadset className="nav__icon" />
              <span className="nav__num">+8801828481501</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
