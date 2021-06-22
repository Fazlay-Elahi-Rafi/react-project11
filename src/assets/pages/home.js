import React from "react";

import Header from "../component/02-Header_Slider/header";
import About from "../component/03-About/about";
import Count from "../component/04-Count/count";
import Main from "../component/05-Cart/main";
import Discount from "../component/06-Discount/discount";
import Deals from "../component/07-Deals/deals";
import Doc from "../component/08-Doc/doc";
import Premium from "../component/09.Premium/premium";
import Featured from "../component/10-Featured/featured";
import Add from "../component/12-Adds/add";
import Help from "../component/13-Help/help";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Count />
      <Main />
      <Discount />
      <Deals />
      <Doc />
      <Premium />
      <Featured />
      <Add />
      <Help />
    </>
  );
}
