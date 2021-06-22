import React from "react";

import Props from "./props";

export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-md-5 pt-md-3 pt-lg-4">
            <div className=" mb-5">
              <Props
                place="office at america"
                comp="basement company, new york"
                mail="enquiry@bakery.com"
                num="+88018xxxxxxx"
              />
            </div>
            <Props
              place="office at paris"
              comp="189/32 basement company, paris, france"
              mail="enquiry@bakery.com"
              num="+88018xxxxxxx"
            />
          </div>
          <div className="col-12 col-md-5 mt-5 mt-md-0">
            <form className="contact__form">
              <div className="">
                <input
                  className="contact__form-inp form-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="my-3">
                <input
                  className="contact__form-inp form-control"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3">
                <input
                  className="contact__form-inp form-control"
                  type="number"
                  placeholder="+880"
                />
              </div>
              <div className="">
                <textarea
                  className="form-control contact__form-inp"
                  cols="30"
                  rows="6"
                  placeholder="Text your message here..."
                ></textarea>
              </div>
              <button className="btn contact__form-btn form-control">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
