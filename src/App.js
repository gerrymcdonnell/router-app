import React, { Component } from "react";

//import route component
import { Route, Switch } from 'react-router-dom'

import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="content">
          {/**with the switch route component put the more specfic routes first */}
          <Switch>

            {/**paramater passing to route */}
            <Route path="/products/:id" component={ProductDetails} />

            {/**vid 98 how to pass props to route */}
            <Route
              path="/products"
              render={(props) => <Products sortBy="newest" {...props} />}
            />
            {/**regex ? denotes optional */}
            <Route path="/posts/:year?/:month?" component={Posts} />

            <Route path="/admin" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
