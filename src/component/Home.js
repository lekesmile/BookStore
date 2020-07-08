import React, { useEffect, useState } from "react";
import Header from "./Header";
import Axios from "axios";
import Books from "./Books";

const Home = () => {
  // State & Setstate
  const [books, setBook] = useState([]);

  // Get data to fill table
  const getDataFromBackend = () => {
    Axios.get("http://localhost:5000")
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

  const deletefromDatabase = (id) => {
    Axios.delete(`http://localhost:5000/${id}`)
      .then((res) => {
        console.log("delete" + id);
        const del = books.filter((books) => id !== books.id);
        setBook(del);
        // window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <React.Fragment>
      <div>
        <Header />

        <Books book={books} deletefromDatabase={deletefromDatabase} />
      </div>
    </React.Fragment>
  );
};

export default Home;
