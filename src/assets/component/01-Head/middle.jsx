import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import logo from "../../img/logo.png";
import FullPage from "./fullPage";

import { FaSearch, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";

export default function Middle() {
  const cart = useSelector((state) => state.shop.cart);

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <section className="bottom">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-2 text-start d-flex d-md-block justify-content-between align-items-center">
            <a href="#">
              <img className="img-fluid w-50" src={logo} alt="logo" />
            </a>
            <div className="d-flex d-md-none">
              <a href="#" className="bottom__cart">
                <FaShoppingCart className="bottom__cart-icon" />
                <div className="bottom__cart-num">
                  <span className="bottom__cart-span">0</span>
                </div>
              </a>
              <div className="">
                <FullPage />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-xl-6 mt-4 mt-md-0">
            <div className="d-flex">
              <input
                type="text"
                className="bottom__inp form-control"
                placeholder="Search..."
              />
              <button className="btn bottom__search">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="col-md-5 col-xl-4 d-none d-md-flex justify-content-around align-items-center">
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
            <Link to="/cart" className="bottom__cart">
              <FaShoppingCart className="bottom__cart-icon" />
              <div className="bottom__cart-num">
                <span className="bottom__cart-span">{cartCount}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
