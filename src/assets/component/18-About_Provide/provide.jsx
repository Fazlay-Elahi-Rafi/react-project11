import React from "react";

import { FaShoppingBag, FaShippingFast, FaTags } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { ImLoop2 } from "react-icons/im";

import Props from "./props";

export default function Provide() {
  return (
    <section className="provide">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="provide__title">what we provide ?</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 text-center text-md-start mb-5">
            <Props
              icon={
                <>
                  <FaShoppingBag className="provide__card-icon" />
                </>
              }
              text="best price & offers"
              para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptate dolor sunt sint architecto aliquam molestias."
            />
          </div>
          <div className="col-md-6 col-lg-4 text-center text-md-end text-lg-center mb-5">
            <Props
              icon={
                <>
                  <GiWorld className="provide__card-icon" />
                </>
              }
              text="wide assortment"
              para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptate dolor sunt sint architecto aliquam molestias."
            />
          </div>
          <div className="col-md-6 col-lg-4 text-center text-md-end my-md-5 my-lg-0 mb-5">
            <Props
              icon={
                <>
                  <ImLoop2 className="provide__card-icon" />
                </>
              }
              text="easy return"
              para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptate dolor sunt sint architecto aliquam molestias."
            />
          </div>
          <div className="col-md-6 col-lg-4 text-center text-md-start my-md-5 my-lg-0 mb-5 mb-lg-0">
            <Props
              icon={
                <>
                  <FaShippingFast className="provide__card-icon" />
                </>
              }
              text="free & next day delivery"
              para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptate dolor sunt sint architecto aliquam molestias."
            />
          </div>
          <div className="col-md-6 col-lg-4 text-center text-md-start text-lg-center mb-5 mb-md-0">
            <Props
              icon={
                <>
                  <GiWorld className="provide__card-icon" />
                </>
              }
              text="100% satisfaction"
              para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptate dolor sunt sint architecto aliquam molestias."
            />
          </div>
          <div className="col-md-6 col-lg-4 text-center text-md-end">
            <Props
              icon={
                <>
                  <FaTags className="provide__card-icon" />
                </>
              }
              text="easy return"
              para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptate dolor sunt sint architecto aliquam molestias."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
