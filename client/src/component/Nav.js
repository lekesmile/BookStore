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

  const renderSignUp = () => {
    return (
      <div>
        <li
          style={{
            float: "right",
            backgroundColor: "rgb(121, 29, 29)",
            borderRadius: "15px 30px",
            marginTop: 10,
            marginRight: 15,
          }}
        >
          {" "}
          <Link
            className="sign-up-hover"
            style={{ padding: "11px 10px" }}
            to="/signup"
          >
            signup
          </Link>
        </li>
        <li style={{ float: "right" }}>
          {" "}
          <Link to="/login">login</Link>
        </li>
      </div>
    );
  };

  const renderLogged = () => {
    let user = JSON.stringify(data.user.name);
    let userInfo = user.substring(1).slice(0, -1);
    return (
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li style={{ float: "right" }}>
          {" "}
          <div
            className="login-div"
            style={{
              color: "white",
              display: "flex",
              float: "right",
            }}
          >
            <p style={{ fontSize: 14, paddingTop: 6 }}>
              {" "}
              {` ${capitalizeFirstLetter(userInfo)}`}
            </p>
            <FaUserCircle onClick={handlelogout} style={{ margin: 20 }} />
          </div>
        </li>
      </div>
    );
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <nav>
        <div className="navH1">
          {" "}
          <Link to="/">
            <GiBlackBook
              style={{
                width: 100,
                height: 50,
                color: "white",
                margin: " 0 auto",
                marginTop: "8px",
              }}
            />
          </Link>
        </div>

        <ul className="nav-ul">
          {login === false ? renderSignUp() : renderLogged()}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
