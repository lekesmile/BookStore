import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Alert from "./Alert";
import Axios from "axios";

const FormSaveBook = () => {
  let history = useHistory();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [PublishedDate, setPublishedDate] = useState("");
  const [alert, setAlert] = useState({ show: "false" });

  // Request Object to post

  // Axios Post request

  const SaveBook = (e) => {
    // prevent default form operation

    e.preventDefault();

    // Get token from localstorage
    try {
      const userData = JSON.parse(localStorage.getItem("userDetails"));

      let header = {
        Authorization: JSON.parse(JSON.stringify(userData.authorization)),
      };

      const newbook = {
        author: author,
        title: title,
        serialNo: serialNo,
        publicationDate: PublishedDate,
        userInfo: JSON.parse(JSON.stringify(userData.user._id)),
      };

      // Making request to backend route
      Axios.post("/api", newbook, { headers: header })
        .then((res) => {
          console.log(res.data);

          setTimeout(
            handleAlert({ type: "alert-success", text: "Book Added" }),
            30000
          );
          history.push("/");
        })
        .catch((e) => {
          console.log(e);
          handleAlert({
            type: "alert-error",
            text: "Sorry, we cannot add book",
          });
        });
    } catch (error) {
      handleAlert({
        type: "alert-error",
        text: "Plsease, login to add a Book",
      });
    }
  };

  //Handle Alert

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 8000);
  };

  return (
    <div className="FormBook">
      <h3 className="FormBookH3">Add a Book</h3>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <form>
        <div className="saveForm">
          <TextField
            className="textCat"
            required={true}
            color="primary"
            type="text"
            label="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="textCat"
            required={true}
            color="primary"
            type="text"
            label="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="textCat"
            required={true}
            color="primary"
            type="number"
            label="serial no"
            name="serialNo"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="textCat"
            required={true}
            color="primary"
            type="date"
            label="date"
            name="publication"
            value={PublishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ marginTop: 30 }}
              variant="outlined"
              color="primary"
              type="submit"
              onClick={SaveBook}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSaveBook;
