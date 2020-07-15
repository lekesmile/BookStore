import React, { useEffect, useState } from "react";
import Header from "./Header";
import Axios from "axios";
import Books from "./Books";

const Home = () => {
  // State & Setstate
  const [books, setBook] = useState([]);

  // Get data to fill table
  const getDataFromBackend = () => {
    Axios.get("/api")
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // On page load
  useEffect(() => {
    getDataFromBackend();
  }, []);

  // Delete Post

  return (
    <React.Fragment>
      <div>
        <Header />

        <Books book={books} />
      </div>
    </React.Fragment>
  );
};

export default Home;
