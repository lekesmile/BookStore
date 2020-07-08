import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import FormSaveBook from "./FormSaveBook";
import FormEdit from "./FormEdit";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Modal,
  Button,
} from "@material-ui/core";
import moment from "moment";
import SearchBook from "./SearchBook";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

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

const Books = ({ book, deletefromDatabase }) => {
  const classes = useStyles();
  //   // States
  const [showModal, setShowModal] = useState(false);
  const [saveBook, setSaveBook] = useState(false);
  const [editBook, setEditBook] = useState(false);

  //Search State
  const [search, setSearch] = useState("");

  // Chandle our search input state change
  const chandleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // Filter methods

  const filteredBooks = book.filter((filterBok) => {
    return filterBok.author.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, book.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <div className="container2">
        <TableContainer component={Paper}>
          <SearchBook search={search} chandleChange={chandleChange} />
          <Table style={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {/* <TableCell>#</TableCell> */}
                <TableCell> Author</TableCell>
                <TableCell> Title</TableCell>
                <TableCell> Serial No</TableCell>
                <TableCell> Published Date</TableCell>
                <TableCell> Edit</TableCell>
                <TableCell> Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredBooks.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredBooks
              ).map((book, index) => {
                return (
                  <TableRow key={book._id}>
                    {/* <TableCell>{Number(index) + 1}</TableCell> */}

                    <TableCell>{book.author}</TableCell>
                    <TableCell> {book.title} </TableCell>
                    <TableCell> {book.serialNo} </TableCell>
                    <TableCell> {moment(book.saved).format("L")} </TableCell>
                    <TableCell className="td-icons">
                      <FaRegEdit
                        onClick={() => {
                          setEditBook(true);
                        }}
                      />
                    </TableCell>
                    <TableCell className="td-icons">
                      <AiOutlineDelete
                        onClick={() => {
                          setShowModal(true);
                        }}
                      />
                    </TableCell>
                    {showModal && (
                      <Modal
                        book={book}
                        className={classes.modal}
                        open={showModal}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={showModal}>
                          <div className={classes.paper}>
                            <h2 id="transition-modal-title">Comfirmation</h2>
                            <p id="transition-modal-description">
                              Are you sure you want to delete book ?
                            </p>
                            <Button
                              style={{ margin: 10 }}
                              variant="outlined"
                              color="primary"
                              onClick={handleClose}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="outlined"
                              color="secondary"
                              onClick={() => {
                                console.log(book._id);
                                deletefromDatabase(book._id);
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </Fade>
                      </Modal>
                    )}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            colSpan={3}
            count={book.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { "aria-label": "Books per page" },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableContainer>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => {
            setSaveBook(true);
          }}
        >
          Add Book
        </Button>

        {saveBook && <FormSaveBook />}
        {editBook && <FormEdit />}
      </div>
    </React.Fragment>
  );
};

// // Table Pagination action

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };
  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
export default Books;
