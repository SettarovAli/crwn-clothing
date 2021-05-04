import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;
