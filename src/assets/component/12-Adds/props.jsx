import React from "react";

import { Link } from "react-router-dom";

export default function Props(props) {
  return (
    <>
      <div className="card adds__link">
        <Link to={props.link} className={props.classO}>
          <img src={props.img} className="img-fluid w-100" alt="img" />
          <div className={props.classT}>
            <div className="">
              <p className={props.classTh}>{props.para}</p>
              <h5 className={props.classF}>{props.text}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
