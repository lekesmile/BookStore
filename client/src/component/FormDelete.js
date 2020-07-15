import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { useHistory } from "react-router-dom";

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

  const handleClose = () => {
    setOpen(false);
  };

  const deletefromDatabase = () => {
    Axios.delete(`/${props.match.params.id}`)
      .then((res) => {
        console.log(props.match.params.id);
        history.push("/");
        // const del = books.filter((books) => id !== books.id);
        // setBook(del);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
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
