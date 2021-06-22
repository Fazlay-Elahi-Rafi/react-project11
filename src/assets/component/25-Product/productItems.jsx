import React, { useState, useEffect } from "react";

import { useFetch } from "./useFetch";
import Body from "./body";
import Right from "./right";

import { FaArrowLeft, FaArrowRight, FaBars } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";

const GridContext = React.createContext();

export default function ProductItems() {
  const [view, upView] = useState(true);
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [blog, upBlog] = useState([]);

  useEffect(() => {
    if (loading) return;
    upBlog(data[page]);
  }, [loading, page]);

  const gridFun = () => {
    upView(false);
  };
  const normalFun = () => {
    upView(true);
  };

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
    <section className="product d-xl-flex">
      <div className="row product__row my-5 justify-content-center justify-content-xl-start">
        <div className="row">
          <div className="col-sm-11 col-md-10 col-xl-9 m-auto m-xl-0">
            <div className="product__row-top">
              <div className="col-8 col-sm-6 text-start">
                <span className="product__row-total">
                  There are
                  <span className="text-primary mx-1">{blog.length}</span>
                  Products
                </span>
              </div>
              <div className="col-5 col-sm-6 text-end">
                <button
                  className={`btn d-none d-sm-inline-flex ${
                    view
                      ? "product__row-grid"
                      : "product__row-grid product__row-active"
                  } `}
                  onClick={gridFun}
                >
                  <FaBars className="" />
                </button>
                <button
                  className={`btn ${
                    view
                      ? "product__row-grid product__row-active"
                      : "product__row-grid"
                  } `}
                  onClick={normalFun}
                >
                  <BsGrid className="d-flex" />
                </button>
              </div>
            </div>
            <div className="col-8"></div>
          </div>
        </div>
        {blog.map((items) => {
          return (
            <>
              <GridContext.Provider value={view}>
                <Body key={items.id} {...items} />
              </GridContext.Provider>
            </>
          );
        })}

        <div className="col-12 d-flex justify-content-center pt-4 m-auto">
          <button className="btn product__paginat-arrow" onClick={prevPage}>
            <FaArrowLeft className="product__paginat-icon" />
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`btn product__paginat ${
                  index === page ? "product__paginat-active" : null
                }`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="btn product__paginat-arrow" onClick={nextPage}>
            <FaArrowRight className="product__paginat-icon" />
          </button>
        </div>
      </div>
      <div className="row">
        <Right />
      </div>
    </section>
  );
}

export { GridContext };
