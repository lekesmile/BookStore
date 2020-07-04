import React from "react";
import { Link } from "react-router-dom";




const Nav = () => {
  


  return (
    <div>
    <nav >
      <h1 className="logo">logo</h1>
      <ul className="nav-ul">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">login</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">signup</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Nav;