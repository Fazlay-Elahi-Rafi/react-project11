import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { RiDeleteBin6Line } from "react-icons/ri";

import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(item.id, e.target.value));
  };

  return (
    <>
      <div className="card mb-3 total__product">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="total__product-img">
              <img className="img-fluid" src={item.image} alt={item.name} />
            </div>
          </div>
          <div className="col-md-8 m-auto py-4 py-md-0">
            <div className="card-body">
              <h5 className="total__product-text">{item.text}</h5>
              <p className="total__product-title">{item.name}</p>
              <p className="total__product-price">$ {item.price}</p>
              <div className="d-sm-flex justify-content-between align-items-center">
                <label htmlFor="qty" className="total__product-label">
                  Qty
                </label>
                <input
                  className="total__product-inp"
                  min="1"
                  type="number"
                  id="qty"
                  name="qty"
                  value={input}
                  onChange={onChangeHandler}
                />
                <RiDeleteBin6Line
                  className="total__product-cancel"
                  onClick={() => dispatch(removeFromCart(item.id))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
