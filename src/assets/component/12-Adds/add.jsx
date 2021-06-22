import React from "react";
import { Link } from "react-router-dom";

import img from "../../img/adds-1.jpg";
import img2 from "../../img/adds-2.jpg";
import img3 from "../../img/adds-3.jpg";
import Props from "./props";

export default function Add() {
  return (
    <section className="adds">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-12 col-lg-6">
            <Props
              link={"/"}
              classO="adds__link-one"
              classT="card-img-overlay adds__link-one--layer"
              classTh="adds__link-one--para"
              classF="adds__link-one--text"
              img={img}
              para="best cocklet"
              text="25% fruit & nuts"
            />
          </div>
          <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
            <Props
              link={"/"}
              classO="adds__link-two"
              classT="card-img-overlay adds__link-two--layer"
              classTh="adds__link-two--para"
              classF="adds__link-two--text"
              img={img2}
              para="the new"
              text="cocklet ice cream"
            />
          </div>
          <div className="col-sm-6 col-lg-3 mt-4 mt-lg-0">
            <Props
              link={"/"}
              classO="adds__link-two"
              classT="card-img-overlay adds__link-two--layer"
              classTh="adds__link-two--para"
              classF="adds__link-two--text"
              img={img3}
              para="delicious"
              text="fresh potato"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
