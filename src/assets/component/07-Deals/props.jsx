import React from "react";
import { Link } from "react-router-dom";

export default function Props(props) {
  return (
    <>
      <div className={props.classO}>
        <div className="row g-0">
          <div className="col-10 col-sm-9 col-md-4 m-auto">
            <div className="d-flex">
              <span className={props.classT}>{props.span}</span>
            </div>
            <div className="overflow-hidden">
              <img
                className="img-fluid deals__card-img"
                src={props.img}
                alt="img"
              />
            </div>
          </div>
          <div className="col-md-7 col-xl-8 col-xxl-7 m-auto">
            <div className="card-body">
              <div className="mb-2">
                <Link to={props.urlO} className="deals__linkO">
                  {props.linkO}
                </Link>
              </div>
              <Link to={props.urlT} className="deals__linkT">
                {props.linkT}
              </Link>
              <p className="deals__text">{props.para}</p>
              <span className="deals__price">{props.price}</span>
              <hr className="deals__hr" />
              <h6 className="deals__offer">
                hurry up! <br /> offer ends in
              </h6>
              <div className="deals__counter d-flex justify-content-evenly justify-content-md-between text-center">
                {props.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
