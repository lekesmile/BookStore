import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Nav from "./component/Nav";
import Home from './component/Home';
import Login from './component/Login';
import About from './component/About';
import SignUp from './component/SignUp';


const App = () => {



 
  return (
    <div>
        <Router>
      <Nav />

        <Switch>
           <Route exact path="/" exact component={Home} /> *
          <Route  path="/login" component={Login} />
          <Route path="/about" component={About} /> 
          <Route path="/signup" component={SignUp} /> 
        </Switch>
          </Router> 
    </div>
    
  );
};

export default App;






 