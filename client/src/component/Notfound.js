import React from "react";

const Notfound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "200px", marginBottom: 0 }}>404</h1>
      <p style={{ fontFamily: "Times New Roman" }}>Page not found</p>
      <p style={{ fontFamily: "Times New Roman" }}>
        The page you are looking for doesn't exist or an error occured
      </p>
    </div>
  );
};

export default Notfound;
