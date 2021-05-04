import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./componets/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
