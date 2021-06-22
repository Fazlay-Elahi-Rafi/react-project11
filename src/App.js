import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Loader
import loader from "./assets/img/loader.gif";

// Page
import Head from "./assets/component/01-Head/head";
import Home from "./assets/pages/home";
import About from "./assets/pages/about";
import Cart from "./assets/pages/cart";
import Blog from "./assets/pages/blog";
import Contact from "./assets/pages/contact";
import Product from "./assets/pages/product";
import Error from "./assets/pages/error";

// Footer
import Subscribe from "./assets/component/14-Subscribe/subscribe";
import Footer from "./assets/component/15-Footer/footer";

// Scroll
import Scroll from "./assets/component/00.Scroll/scroll";

import { Provider } from "react-redux";
import store from "./assets/redux/store";

export default function App() {
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 5000);
  }, []);

  if (state) {
    return (
      <>
        <div className="loader">
          <img className="m-auto" src={loader} alt="loader" />
        </div>
      </>
    );
  }

  return (
    <Provider store={store}>
      <Router>
        <Head />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/product" component={Product} />
          <Route path="*" component={Error} />
        </Switch>
        <Subscribe />
        <Footer />
        <Scroll showBelow={500} />
      </Router>
    </Provider>
  );
}
