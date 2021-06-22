import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import CartItem from "../component/05-Cart/CartItem";
import Head from "../component/05-Cart/head";

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cartItems.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
      console.log(price);
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      <Head />
      <section className="total">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-5 pt-5">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="col-lg-5 mt-5 pt-5">
              <div className="card py-4">
                <div className="card-body">
                  <h4 className="total__title mb-3">Total Ammount</h4>
                  <div className="my-4">
                    <span className="total__item">
                      total items:
                      <span className="fw-bold">({totalItems})</span>
                    </span>
                    <span className="total__price">
                      price <span className="fw-bold">$ {totalPrice} </span>
                    </span>
                  </div>
                  <button className="btn total__btn">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
