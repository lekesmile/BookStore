import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";
import About from "./component/About";
import SignUp from "./component/SignUp";
import Footer from "./component/Footer";
import FormEdit from "./component/FormEdit";
import FormSaveBook from "./component/FormSaveBook";
import FormDelete from "./component/FormDelete";
import Notfound from "./component/Notfound";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/edit/:id" component={FormEdit} />
          <Route path="/save/" component={FormSaveBook} />
          <Route path="/delete/:id" component={FormDelete} />
          <Route component={Notfound} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
