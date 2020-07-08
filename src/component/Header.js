import React from "react";

const Header = () => {
  return (
    <div className="jumbotron">
      <div className="container-fluid">
        <div className="row-fluid">
          <div className="col-xs-4">
            <h3>
              <span className="glyphicon glyphicon-time"></span>
            </h3>
          </div>
          <div>
            <h1 className="title">
              <span className="title-span1">Book</span>
              <span className="title-span2">Store</span>
            </h1>
            <p className="p-title">
              This is a bookstore APP where you can easily upload your
              favourites books !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
