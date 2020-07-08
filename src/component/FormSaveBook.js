import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import Button from "@material-ui/core/Button";
import Alert from "./Alert";
import Axios from "axios";

const FormSaveBook = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [PublishedDate, setPublishedDate] = useState("");
  const [alert, setAlert] = useState({ show: "false" });

  // Request Object to post

  const newbook = {
    author: author,
    title: title,
    serialNo: serialNo,
    saved: PublishedDate,
  };

  // Axios Post request

  const SaveBook = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:5000", newbook)
      .then((res) => {
        console.log(res.data);
        handleAlert({ type: "alert-success", text: "Book Added" });
        setTimeout(window.location.reload(), 30000);
      })
      .catch((e) => {
        console.log(e);
        handleAlert({ type: "alert-error", text: "Sorry, we cannot add book" });
      });
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

      <form className="saveForm">
        <TextField
          className="textCat"
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
        <div>
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
      </form>
    </div>
  );
};

export default FormSaveBook;
