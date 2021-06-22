import React from "react";

import Props from "./props";

import icon from "../../img/icon-09.png";
import img from "../../img/user-01.jpg";
import img2 from "../../img/user-02.jpg";
import img3 from "../../img/user-03.jpg";
import img4 from "../../img/user-04.jpg";

export default function User() {
  return (
    <section className="user">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src={icon} className="img-fluid user__icon" alt="icon" />
            <h1 className="user__title">our amazing team</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0">
            <Props
              img={img}
              name="fazlay rafi"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0">
            <Props
              img={img2}
              name="md rafi"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0">
            <Props
              img={img3}
              name="agnes buchanan"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <Props
              img={img4}
              name="rafi"
              para="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              span="ceo - founder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
