import React from "react";

import { FiMail, FiPhoneCall } from "react-icons/fi";
import { FaGooglePlusG, FaTwitter, FaFacebookF, FaRss } from "react-icons/fa";

export default function Props(props) {
  return (
    <>
      <ul className="contact__list">
        <li>
          <h3 className="contact__place">{props.place}</h3>
        </li>
        <li>
          <h3 className="contact__comp">{props.comp}</h3>
        </li>
        <li className="mb-1">
          <span className="contact__contact">
            <FiMail className="contact__icon" /> {props.mail}
          </span>
        </li>
        <li>
          <span className="contact__contact">
            <FiPhoneCall className="contact__icon" />
            {props.num}
          </span>
        </li>
      </ul>
      <div className="contact__social">
        <div className="col-4 col-md-5 col-xl-3">
          <ul className="contact__social-list">
            <li>
              <a className="contact__social-link" href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a className="contact__social-link" href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a className="contact__social-link" href="#">
                <FaGooglePlusG />
              </a>
            </li>
            <li>
              <a className="contact__social-link" href="#">
                <FaRss />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
