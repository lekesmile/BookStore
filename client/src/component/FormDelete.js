import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Alert from "./Alert";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const FormDelete = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [alert, setAlert] = useState({ show: "false" });

  const handleClose = () => {
    setOpen(false);
  };

  const deletefromDatabase = () => {
    try {
      // Get token from localstorage
      const userData = JSON.parse(localStorage.getItem("userDetails"));
      let header = {
        Authorization: JSON.parse(JSON.stringify(userData.authorization)),
      };
      // Making request to backend route
      Axios.delete(`/api/${props.match.params.id}`, { headers: header })
        .then((res) => {
          console.log(props.match.params.id);
          history.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      handleAlert({
        type: "alert-error",
        text: "Login/Signup to delete a Book",
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
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Comfirmation</h2>
            <p id="transition-modal-description">
              Are you sure you want to delete book ?
            </p>
            <Button
              style={{ margin: 10 }}
              variant="outlined"
              color="primary"
              onClick={() => {
                history.push("/");
              }}
            >
              Cancel
            </Button>
            <Button
              style={{ margin: 10 }}
              variant="outlined"
              color="secondary"
              onClick={() => {
                deletefromDatabase();
              }}
            >
              Delete
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default FormDelete;
