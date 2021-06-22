import React from "react";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaUserAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function BlogItems({ id, link, date, name, text, img }) {
  return (
    <>
      <div className="card body__blog my-5 border-0" key={id}>
        <div className="row g-0">
          <div className="col-xl-6  col-xxl-5">
            <div className="body__blog-img">
              <img src={img} className="img-fluid" alt="img" />
            </div>
          </div>
          <div className="col-xl-6  col-xxl-7 m-auto">
            <div className="card-body">
              <Link to="/" className="body__blog-title">
                {link}
              </Link>
              <div className="d-flex mt-2 mb-3">
                <div className="">
                  <FaCalendarAlt className="body__blog-icon" />
                  <span className="body__blog-date">{date}</span>
                </div>
                <div className="">
                  <FaUserAlt className="body__blog-icon" />
                  <span className="body__blog-name">{name}</span>
                </div>
              </div>
              <p className="body__blog-text">{text}</p>
              <ul className="body__blog-list">
                <li>
                  <FaFacebookF className="body__blog-social--fb" />
                </li>
                <li>
                  <FaTwitter className="body__blog-social--tw" />
                </li>
                <li>
                  <FaInstagram className="body__blog-social--ins" />
                </li>
                <li>
                  <FaLinkedinIn className="body__blog-social--in" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
