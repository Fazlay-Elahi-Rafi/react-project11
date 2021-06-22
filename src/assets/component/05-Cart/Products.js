import React from "react";

import { useSelector } from "react-redux";

import { useAdds } from "./useAdds";

import Body from "./items/items1";
import Body2 from "./items/items2";
import Body3 from "./items/items3";
import Body4 from "./items/items4";

const Products = () => {
  const products = useSelector((state) => state.shop.products);
  const product2 = useSelector((state) => state.shop.product2);
  const product3 = useSelector((state) => state.shop.product3);
  const product4 = useSelector((state) => state.shop.product4);

  const { item1, item2, item3, item4, funOne, funTwo, funThree, funFour } =
    useAdds();

  return (
    <>
      <div className="col-12 col-xl-7">
        <ul className="cart__nav">
          <li
            className={`${item1 ? "cart__nav-show" : "cart__nav-defl"}`}
            onClick={funOne}
          >
            item-01
          </li>
          <li
            className={`${item2 ? "cart__nav-show" : "cart__nav-defl"}`}
            onClick={funTwo}
          >
            item-02
          </li>
          <li
            className={`${item3 ? "cart__nav-show" : "cart__nav-defl"}`}
            onClick={funThree}
          >
            item-03
          </li>
          <li
            className={`${item4 ? "cart__nav-show" : "cart__nav-defl"}`}
            onClick={funFour}
          >
            item-04
          </li>
        </ul>
        <div className="overflow-hidden">
          <div
            className={`row ${item1 ? "cart__nav-active" : "cart__nav-hide"}`}
          >
            {products.map((product) => (
              <Body key={product.id} product={product} />
            ))}
          </div>
          <div
            className={`row ${item2 ? "cart__nav-active" : "cart__nav-hide"}`}
          >
            {product2.map((product) => (
              <Body2 key={product.id} product={product} />
            ))}
          </div>
          <div
            className={`row ${item3 ? "cart__nav-active" : "cart__nav-hide"}`}
          >
            {product3.map((product) => (
              <Body3 key={product.id} product={product} />
            ))}
          </div>
          <div
            className={`row ${item4 ? "cart__nav-active" : "cart__nav-hide"}`}
          >
            {product4.map((product) => (
              <Body4 key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
