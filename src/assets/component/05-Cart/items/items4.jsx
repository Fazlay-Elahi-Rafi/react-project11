import React from "react";
import { Link } from "react-router-dom";

import { IoEyeOutline, IoSyncOutline } from "react-icons/io5";

import {
  loadCurrentItem,
  addFour,
} from "../../../redux/Shopping/shopping-actions";

import { useDispatch } from "react-redux";

const Items4 = ({ product }) => {
  const dispatch = useDispatch();

  const myFun1 = (id) => {
    dispatch(addFour(id));
  };
  const myFun2 = (item) => {
    dispatch(loadCurrentItem(item));
  };

  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
        <div className="cart__item">
          <div className="card">
            <div className="cart__item-icon">
              <Link to={`/product/${product.id}`}>
                <button
                  onClick={() => myFun2(product)}
                  className="cart__item-icon--link btn"
                >
                  <IoEyeOutline />
                </button>
              </Link>
              <button
                onClick={() => myFun1(product.id)}
                className="cart__item-icon--link btn"
              >
                <IoSyncOutline />
              </button>
            </div>
            <div className="cart__item-img">
              <img src={product.image} className="img-fluid" alt="img" />
            </div>
            <div className="card-body text-center">
              <h5 className="cart__item-text">{product.text}</h5>
              <h4 className="cart__item-name">{product.name}</h4>
              <span className="cart__item-price">${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items4;
