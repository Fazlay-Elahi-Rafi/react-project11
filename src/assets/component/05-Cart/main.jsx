import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Add from "./add";

import Products from "./Products";
import SingleItem from "./SingleItem";

export default function Main() {
  const myState = useSelector((state) => state.shop.currentItem);
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
          <Router>
            <Switch>
              <Route exact path="/" component={Products} />
              {!myState ? (
                <Redirect to="/" />
              ) : (
                <Route exact path="/product/:id" component={SingleItem} />
              )}
            </Switch>
          </Router>
        </div>
      </div>
    </section>
  );
}
