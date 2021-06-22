import React from "react";

import img from "../../img/discount.jpg";

export default function Discount() {
  return (
    <section className="disc">
      <div className="card disc__card">
        <div className="disc__card-img">
          <img src={img} className="img-fluid" alt="img" />
        </div>
        <div className="card-img-overlay disc__layer">
          <div className="disc__card-body">
            <h4 className="disc__card-title">discount</h4>
            <h5 className="disc__card-num">30%</h5>
            <button className="disc__card-btn btn">shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
