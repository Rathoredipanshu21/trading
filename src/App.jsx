import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./Components/Home/Products";
import ProductDetail from "./Components/Home/ProductDetail";
import Mainservice from "./Components/Services/Mainservice";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/product/:id" component={ProductDetail} />

      </Switch>
    </Router>
  );
};

export default App;
