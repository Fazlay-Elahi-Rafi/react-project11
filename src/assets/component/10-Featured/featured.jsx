import React from "react";

import Product from "./product";

export default function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-sm-start">
            <h1 className="featured__title">featured product</h1>
          </div>
        </div>
        <div className="row">
          <Product />
        </div>
      </div>
    </section>
  );
}
