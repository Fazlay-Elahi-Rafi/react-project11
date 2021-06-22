import React, { useState, useEffect } from "react";

import { useFetch } from "./useFetch";
import Items from "./blogItems";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import BlogSlider from "./blogSlider";

export default function Body() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [blog, upBlog] = useState([]);

  useEffect(() => {
    if (loading) return;
    upBlog(data[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <section className="body ">
      <div className="row">
        <div className="col-12 col-md-8 my-5">
          <div className="row justify-content-center m-auto m-xl-0">
            <div className="col-11 col-xl-10">
              <BlogSlider />
            </div>
            <div className="col-11 col-xl-10">
              {blog.map((items) => {
                return <Items key={items.id} {...items} />;
              })}
            </div>
            <div className="col-sm-6 d-flex justify-content-center pt-4 m-auto">
              <button className="btn body__paginat-arrow" onClick={prevPage}>
                <FaArrowLeft className="body__paginat-icon" />
              </button>
              {data.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`btn body__paginat ${
                      index === page ? "body__paginat-active" : null
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="btn body__paginat-arrow" onClick={nextPage}>
                <FaArrowRight className="body__paginat-icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 body__right">
          <div className="row m-auto py-5">
            <h1 className="body__right-title">search</h1>
            <div className="col-sm-10 col-md-12 col-lg-10 col-xl-8">
              <input
                className="form-control body__right-inp"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="row my-5 m-auto">
            <h1 className="body__right-title">category</h1>
            <div className="col-12">
              <ul className="body__right-list">
                <li>
                  <a href="#"> Amazin Glazin</a>
                </li>
                <li>
                  <a href="#"> Confection Connect</a>
                </li>
                <li>
                  <a href="#"> Mad Batter</a>
                </li>
                <li>
                  <a href="#"> Skippity Scones</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row my-5 py-4 m-auto">
            <h1 className="body__right-title">cookware</h1>
            <div className="col-8">
              <div className="dropdown">
                <button
                  className="btn body__right-drop dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  baking $ pastry mats
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      baking cups
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      baking dishes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      pastry mats
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      pastry mats
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-8 mt-3">
              <div className="dropdown">
                <button
                  className="btn body__right-drop dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  cocklet modules
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      baking cups
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      baking dishes
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      pastry mats
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item body__right-drop--item"
                      href="#"
                    >
                      pastry mats
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row my-5 m-auto">
            <h1 className="body__right-title">tags</h1>
            <div className="col-xl-7 col-xxl-5">
              <ul className="body__right-tag--list">
                <li>
                  <button className="btn">bakery</button>
                </li>
                <li>
                  <button className="btn">bkery</button>
                </li>
                <li>
                  <button className="btn">coconut</button>
                </li>
                <li>
                  <button className="btn">cupcake</button>
                </li>
                <li>
                  <button className="btn">sugar flower</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
