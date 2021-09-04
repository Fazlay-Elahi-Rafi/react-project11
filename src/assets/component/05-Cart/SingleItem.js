import React from "react";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = () => {
  const current = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  
  return current === null ? (
    <div className="singleItem__error">
      <h3 className="singleItem__error-title">Oops!! there is no items</h3>
      <Link to="/" className="btn singleItem__error-btn">
        go back
      </Link>
    </div>
  ) : (
    <>
      <section className="singleItem">
        <div className="container">
          <div className="row">
            <div className="col-sm-9 col-md-12 m-auto">
              <div className="singleItem__body">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-12 col-md-5 col-lg-5">
                    <img
                      className="img-fluid"
                      src={current.image}
                      alt={current.text}
                    />
                  </div>
                  <div
                    className="col-12 col-md-6 col-lg-6 py-4 py-md-0"
                    style={{ margin: "0 0 0 1rem" }}
                  >
                    <h2 className="singleItem__body--text">{current.text}</h2>
                    <p className="singleItem__body--name">{current.name}</p>
                    <div className="col-11">
                      <ul className="singleItem__body--list">
                        <li>{current.descO}</li>
                        <li>{current.descT}</li>
                        <li>{current.descTh}</li>
                      </ul>
                    </div>
                    <span className="singleItem__body--price">
                      ${current.price}
                    </span>
                    <div className="mt-3">
                      <button
                        onClick={() => dispatch(addToCart(current.id))}
                        className="btn singleItem__body--btn"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
