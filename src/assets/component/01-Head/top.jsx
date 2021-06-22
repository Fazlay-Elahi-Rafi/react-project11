import React from "react";

import {
  RiFacebookCircleLine,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { VscLocation } from "react-icons/vsc";
import { FaShippingFast } from "react-icons/fa";

export default function Top() {
  return (
    <section className="top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 col-xli-4 text-center text-md-start">
            <div className="top__social">
              <ul className="top__social-list">
                <li>
                  <a href="#">
                    <RiFacebookCircleLine className="top__social-list--fb" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RiTwitterFill className="top__social-list--tw" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RiInstagramFill className="top__social-list--ins" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RiYoutubeFill className="top__social-list--you" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-8 d-none d-md-block">
            <div className="top__location">
              <ul className="top__location-ul">
                <li className="top__location-ul--item">
                  <a href="#">
                    <VscLocation className="top__location-ul--icon" />
                    <span className="top__location-ul--text">location</span>
                  </a>
                </li>
                <li className="top__location-ul--item">
                  <a href="#">
                    <FaShippingFast className="top__location-ul--icon2" />
                    <span className="top__location-ul--text">
                      track your order
                    </span>
                  </a>
                </li>
                <div className="dropdown">
                  <a
                    className="btn dropdown-toggle top__location__drop"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    bdt
                  </a>

                  <ul
                    className="dropdown-menu top__location__drop--list"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        eru
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        usd
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
