import React from "react";
import { Link } from "react-router-dom";

import img from "../../img/deals-01.png";
import img2 from "../../img/deals-02.png";
import Props from "./props";
import Time from "./time";

export default function Deals() {
  return (
    <section className="deals">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="deals__title">todays special</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-6">
            <Props
              classO="card mb-3 deals__card deals__card-borderO"
              classT="deals__new"
              span="new"
              img={img}
              urlO={"/"}
              urlT={"/"}
              linkO="Fresh Vegetables"
              linkT="Tropical Juice Drink"
              para="Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.Part of the Kaval Collection."
              price="$15.00"
              time={
                <>
                  <Time targetDate="Oct 25, 2021" targetTime="18:00:00" />
                </>
              }
            />
          </div>
          <div className="col-lg-10 col-xl-6">
            <Props
              classO="card mb-3 deals__card deals__card-borderT"
              classT="deals__hot"
              span="hot"
              img={img2}
              urlO={"/"}
              urlT={"/"}
              linkO="Fresh Vegetables"
              linkT="Warburtons 9 Crumpets"
              para="Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.Part of the Kaval Collection."
              price="$18.00"
              time={
                <>
                  <Time targetDate="Oct 25, 2021" targetTime="18:00:00" />
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
