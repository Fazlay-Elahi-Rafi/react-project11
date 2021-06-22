import React from "react";

import {
  FaMoneyCheck,
  FaAmazonPay,
  FaPhoneAlt,
  FaShippingFast,
} from "react-icons/fa";

export default function Help() {
  return (
    <section className="help">
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-6 col-lg-3 mb-4 mb-sm-5 mb-lg-0">
            <FaMoneyCheck className="help__icon" />
            <h5 className="help__sub">100% secure payments</h5>
            <p className="help__para">
              Moving your card details to a much more secured place
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-sm-5 mb-lg-0">
            <FaAmazonPay className="help__icon" />
            <h5 className="help__sub">trustpay</h5>
            <p className="help__para">
              Moving your card details to a much more secured place
            </p>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4 mb-sm-5 mb-lg-0">
            <FaPhoneAlt className="help__icon" />
            <h5 className="help__sub">help center</h5>
            <p className="help__para">
              Moving your card details to a much more secured place
            </p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <FaShippingFast className="help__icon" />
            <h5 className="help__sub">express shipping</h5>
            <p className="help__para">
              Moving your card details to a much more secured place
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
