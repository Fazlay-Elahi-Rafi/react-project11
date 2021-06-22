import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { addFive } from "../../redux/Shopping/shopping-actions";
import { useDispatch } from "react-redux";
import { GridContext } from "./productItems";

const Body = ({ id, price, name, text, image }) => {
  const grid = useContext(GridContext);

  const dispatch = useDispatch();

  const myFun1 = (id) => {
    dispatch(addFive(id));
  };

  return (
    <>
      <div
        className={`featured__item mb-5 col-10 ${
          grid ? "col-sm-5 col-md-4 col-lg-3" : "col-sm-11 col-md-10"
        }`}
      >
        <div className="card">
          <div className="row">
            <div className={`${grid ? "col-lg-12" : "col-sm-6 col-lg-6"}`}>
              <div className="featured__item-img">
                <img src={image} className="img-fluid" alt="img" />
              </div>
            </div>
            <div
              className={`${grid ? "col-lg-12" : "col-sm-6 col-lg-6 m-auto"}`}
            >
              <div className="card-body text-center p-0 py-3">
                <h5 className="featured__item-text">{text}</h5>
                <Link to="/" className="featured__item-name">
                  {name}
                </Link>
                <span className="featured__item-price">${price}</span>

                <button
                  onClick={() => myFun1(id)}
                  className="featured__item-link btn mt-4"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
