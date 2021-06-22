import React, { useState } from "react";
import { Link } from "react-router-dom";

import { TiTimesOutline } from "react-icons/ti";
import { FaBars, FaRegUserCircle } from "react-icons/fa";

const FullPage = () => {
  const [show, upShow] = useState(false);

  const closeFun = () => {
    upShow(false);
  };

  const showFun = () => {
    upShow(true);
  };

  return (
    <section className="d-block d-md-none">
      <div className="col-3 col-sm-2 d-flex justify-content-center">
        <div className="fullpage__bars">
          <FaBars
            onClick={showFun}
            className="fullpage__bars-icon"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className={`${show ? "fullpage__navclose fullpage" : "fullpage"}`}>
        <div className="container">
          <div className="col-12 my-3">
            <TiTimesOutline
              onClick={closeFun}
              className={`${show ? "fullpage__close" : "navclose"}`}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="col-md-5 col-xl-4 d-flex justify-content-start align-items-center">
            <a href="#" className="bottom__user">
              <div className="dropdown">
                <a
                  className="btn dropdown-toggle bottom__user-btn"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="">
                    <FaRegUserCircle className="bottom__user-icon" />
                  </div>
                  fazlay elahi rafi
                </a>

                <ul
                  className="dropdown-menu bottom__user-btn--list"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      login
                    </a>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <ul className="fullpage__list">
            <li className="fullpage__list-li my-4">
              <Link className="fullpage__list-link active" to="/">
                home
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/about">
                about
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/blog">
                blog
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/product">
                product
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/cart">
                cart
              </Link>
            </li>
            <li className="fullpage__list-li mb-4">
              <Link className="fullpage__list-link" to="/contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FullPage;
