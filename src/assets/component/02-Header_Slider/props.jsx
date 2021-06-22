import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="card header__card">
        <img src={props.img} className="img-fluid header__card-img" alt="img" />
        <div className="card-img-overlay header__card-layer">
          <div className="header__card-body">
            <div className="header__card-trans d-flex align-items-center justify-content-center">
              <hr className="header__card-hr w-50" />
              <h4 className="header__card-wel">{props.wel}</h4>
              <hr className="header__card-hr w-50" />
            </div>
            <h5 className="header__card-title">{props.title}</h5>
            <p className="header__card-text col-sm-10 col-md-8 m-auto">
              {props.text}
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <hr className="header__card-hr2 w-50" />
              <button className="header__card-btn btn">{props.btn}</button>
              <hr className="header__card-hr2 w-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
