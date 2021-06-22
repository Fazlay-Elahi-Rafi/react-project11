import React from "react";

export default function Count() {
  return (
    <section className="count">
      <div className="count__layer">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-lg-3 count__border mb-5 mb-lg-0">
              <div className="">
                <h3 className="count__num">8,000</h3>
                <span className="count__text">products available</span>
              </div>
            </div>
            <div className="col-6 col-lg-3 count__border mb-5 mb-lg-0">
              <div className="">
                <h3 className="count__num">1,000</h3>
                <span className="count__text">healthy recipes</span>
              </div>
            </div>
            <div className="col-6 col-lg-3 count__border">
              <div className="">
                <h3 className="count__num">500</h3>
                <span className="count__text">team members</span>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <h3 className="count__num">200</h3>
              <span className="count__text">customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
