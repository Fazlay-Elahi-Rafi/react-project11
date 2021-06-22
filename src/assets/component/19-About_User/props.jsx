import React from "react";

import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

export default function Props(props) {
  return (
    <>
      <div className="card border-0">
        <div className="user__person">
          <div className="user__person-img text-center">
            <img className="card-img-top img-fluid" src={props.img} alt="img" />
          </div>
          <div className="card-body text-center py-4">
            <h3 className="user__person-name">{props.name}</h3>
            <span className="user__person-span">{props.span}</span>
            <p className="user__person-p">{props.para}</p>
            <div className="user__person-social">
              <ul className="user__person-social--ul">
                <li>
                  <button className="btn user__person-social--ul__btn">
                    <FaFacebookF className="user__person-social--ul__icon" />
                  </button>
                </li>
                <li>
                  <button className="btn user__person-social--ul__btn">
                    <FaTwitter className="user__person-social--ul__icon" />
                  </button>
                </li>
                <li>
                  <button className="btn user__person-social--ul__btn">
                    <FaGoogle className="user__person-social--ul__icon" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
