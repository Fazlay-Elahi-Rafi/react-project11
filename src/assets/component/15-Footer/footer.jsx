import React from "react";
import { Link } from "react-router-dom";

import { BiCurrentLocation, BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

import logo from "../../img/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row text-start">
            <div className="col-3 col-sm-2 col-lg-1">
              <Link className="footer__logo" to="/">
                <img className="img-fluid" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-8 col-lg-4 mb-5 mb-lg-0">
              <p className="footer__para">
                We are a team of designers and developers that create high
                quality Magento, Prestashop, Opencart
              </p>
              <ul className="footer__ul">
                <li className="footer__list">
                  <BiCurrentLocation className="footer__icon" />
                  <Link className="footer__link" to="/">
                    Tongi,Gazipur
                  </Link>
                </li>
                <li className="footer__list">
                  <BiPhoneCall className="footer__icon" />
                  <Link className="footer__link" to="/">
                    fazlayrafi2001@gmail.com
                  </Link>
                </li>
                <li className="footer__list">
                  <HiOutlineMailOpen className="footer__icon" />
                  <Link className="footer__link" to="/">
                    +8801828481501
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mb-5 mb-lg-0">
              <h3 className="footer__sub">information</h3>
              <ul className="footer__itemO">
                <li>
                  <Link className="footer__itemO-link" to="/">
                    delivery
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    payment
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    stores
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mb-5 mb-lg-0">
              <h3 className="footer__sub">information</h3>
              <ul className="footer__itemO">
                <li>
                  <Link className="footer__itemO-link" to="/">
                    delivery
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    payment
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    stores
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mb-5 mb-sm-0">
              <h3 className="footer__sub">information</h3>
              <ul className="footer__itemO">
                <li>
                  <Link className="footer__itemO-link" to="/">
                    delivery
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    payment
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    stores
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 mb-5 mb-sm-0">
              <h3 className="footer__sub">information</h3>
              <ul className="footer__itemO">
                <li>
                  <Link className="footer__itemO-link" to="/">
                    delivery
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    about us
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    payment
                  </Link>
                </li>
                <li>
                  <Link className="footer__itemO-link" to="/">
                    stores
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="col-12 bg-dark text-light text-center mt-4 py-3">
        <p className="m-0">
          &copy; 2021
          <span>
            <span className="mx-2">Design By</span>
            <span className="mx-2">
              <FaHeart className="text-danger" />
              <span className="mx-2">MD.RAFI</span>
              <FaHeart className="text-danger" />
            </span>
          </span>
        </p>
      </div>
    </>
  );
}
