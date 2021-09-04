import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Add from "./add";
import Products from "./Products";

export default function Main() {
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-sm-start">
            <h1 className="cart__title">fresh food</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-9 col-xl-5 mb-5 mb-xl-0 m-auto m-xl-0">
            <Add />
          </div>
          <Route exact path="/" component={Products} />
        </div>
      </div>
    </section>
  );
}
