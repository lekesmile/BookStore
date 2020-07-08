import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";
import About from "./component/About";
import SignUp from "./component/SignUp";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} /> *
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
