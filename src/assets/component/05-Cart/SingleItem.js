import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = () => {
  const current = useSelector((state) => state.shop.currentItem);

  const dispatch = useDispatch();
  return (
    <>
      <Link
        to="/"
        style={{ cursor: "default" }}
        className="cart__backdropshow"
      ></Link>
      <div className="cart__single">
        <div className="col-sm-9 col-md-12 m-auto">
          <div className="cart__single-body">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-12 col-md-5 col-lg-4">
                <img
                  className="img-fluid"
                  src={current.image}
                  alt={current.text}
                />
              </div>
              <div
                className="col-12 col-md-6 col-lg-7 py-4 py-md-0"
                style={{ margin: "0 0 0 1rem" }}
              >
                <h2 className="cart__single-body--text">{current.text}</h2>
                <p className="cart__single-body--name">{current.name}</p>
                <div className="col-11">
                  <ul className="cart__single-body--list">
                    <li>{current.descO}</li>
                    <li>{current.descT}</li>
                    <li>{current.descTh}</li>
                  </ul>
                </div>
                <span className="cart__single-body--price">
                  ${current.price}
                </span>
                <div className="mt-3">
                  <button
                    onClick={() => dispatch(addToCart(current.id))}
                    className="btn cart__single-body--btn"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
