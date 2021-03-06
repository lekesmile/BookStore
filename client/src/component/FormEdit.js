import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import moment from "moment";
import Alert from "./Alert";
import Axios from "axios";

const FormEdit = (props) => {
  const history = useHistory();
  const [author, setAuthor] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [serialNo, setSerialNo] = useState(" ");
  const [PublishedDate, setPublishedDate] = useState(" ");
  const [alert, setAlert] = useState({ show: "false" });

  // auto Fill in the form
  const editFormFillContent = () => {
    Axios.get(`/api/${props.match.params.id}`).then((res) => {
      setAuthor(res.data.author);
      setTitle(res.data.title);
      setSerialNo(res.data.serialNo);
      setPublishedDate(moment(res.data.setPublishedDate).format("YYYY-MM-DD"));
    });
  };

  useEffect(() => {
    editFormFillContent();
  }, []);

  // Axios Post request

  const saveEditedBook = (e) => {
    // prevent default form operation
    e.preventDefault();

    try {
      // Get token from localstorage
      const userData = JSON.parse(localStorage.getItem("userDetails"));
      let header = {
        Authorization: JSON.parse(JSON.stringify(userData.authorization)),
      };

      // Request Object to post

      const newbook = {
        author: author,
        title: title,
        serialNo: serialNo,
        publicationDate: PublishedDate,
        userInfo: JSON.parse(JSON.stringify(userData.user._id)),
      };

      // Making request to backend route
      Axios.put(`/api/${props.match.params.id}`, newbook, { headers: header })
        .then((res) => {
          console.log(res.data);
          handleAlert({ type: "alert-success", text: "Book Added" });
          setTimeout(history.push("/"), 70000);
        })
        .catch((e) => {
          console.log(e);
          handleAlert({
            type: "alert-error",
            text: "Sorry, we cannot add book",
          });
        });
    } catch (error) {
      handleAlert({ type: "alert-error", text: "Sorry, login to edit book" });
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
    <div className="FormBook ">
      <h3 className="FormBookH3">Edit Book</h3>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <form>
        <div className="saveForm">
          <TextField
            className="textCat"
            required={true}
            color="primary"
            type="text"
            label="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="textCat"
            required={true}
            label="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="textCat"
            required={true}
            label="serial No"
            size="small"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            className="textCat"
            required={true}
            label="published date"
            type="date"
            value={PublishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{ margin: "10px 5px 0 5px" }}
              variant="outlined"
              size="small"
              color="secondary"
              type="submit"
              onClick={() => {
                history.push("/");
              }}
            >
              Cancel
            </Button>
            <Button
              style={{ margin: "10px 5px 0 5px" }}
              variant="outlined"
              size="small"
              color="primary"
              type="submit"
              onClick={saveEditedBook}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormEdit;
