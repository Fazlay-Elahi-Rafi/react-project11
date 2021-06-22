import React from "react";
import { Link } from "react-router-dom";

import { addToCart } from "../../redux/Shopping/shopping-actions";

import { useDispatch } from "react-redux";

const Item = ({ product }) => {
  const dispatch = useDispatch();

  const myFun1 = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <>
      <div className="featured__item">
        <div className="card">
          <div className="featured__item-img">
            <img src={product.image} className="img-fluid" alt="img" />
          </div>
          <div className="card-body text-center p-0 py-3">
            <h5 className="featured__item-text">{product.text}</h5>
            <Link to="/" className="featured__item-name">
              {product.name}
            </Link>
            <span className="featured__item-price">${product.price}</span>

            <button
              onClick={() => myFun1(product.id)}
              className="featured__item-link btn mt-4"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
