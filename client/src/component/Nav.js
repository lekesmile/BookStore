import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiBlackBook } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";

let data = JSON.parse(localStorage.getItem("userDetails"));

const Nav = () => {
  const [login, setLogin] = useState(false);

  const history = useHistory();

  const checkLocalStorage = () => {
    let data = JSON.parse(localStorage.getItem("userDetails"));
    if (!data) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  useEffect(() => {
    checkLocalStorage();
  });

  const handlelogout = () => {
    console.log("remove item");
    localStorage.removeItem("userDetails");
    history.push("/");
    window.location.reload();
  };

  const renderLoginSignUp = () => {
    return (
      <div>
        <li style={{ float: "right" }}>
          {" "}
          <Link to="/login">login</Link>
        </li>
        <li style={{ float: "right" }}>
          {" "}
          <Link to="/signup">signup</Link>
        </li>
      </div>
    );
  };

  const renderLoginUser = () => {
    let user = JSON.stringify(data.user.name);
    let userInfo = user.substring(1).slice(0, -1);

    return (
      <div
        className="login-div"
        style={{
          color: "white",
          // width: "15%",
          display: "flex",
          float: "right",
        }}
      >
        <p> {` ${userInfo.toUpperCase()}`}</p>
        <FaUserCircle onClick={handlelogout} style={{ margin: 20 }} />
      </div>
    );
  };

  return (
    <div>
      <nav>
        <div className="navH1">
          {" "}
          <GiBlackBook
            style={{
              width: 100,
              height: 50,
              color: "white",
              margin: " 0 auto",
            }}
          />
        </div>

        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>

          {login === false ? renderLoginSignUp() : renderLoginUser()}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
