import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import { HomePage, ProductPage } from "./pages";
import { HeaderTemp, FooterTemp } from "./components";
import "../src/style.css"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <HeaderTemp />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/product">
              <ProductPage />
            </Route>
            <Route exact path="/cart">
            </Route>
          </Switch>
          <FooterTemp />
        </div>
      </Router>
    </div>
  )
}

export default App