import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:handle" exact component={ProductPage} />
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
