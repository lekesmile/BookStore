const express = require("express");
const router = express.Router();
const Book = require("../schema/Book");
const verify = require("../middleware/authVerification");

router.get("/", async (req, res) => {
  try {
    const findBook = await Book.find({}).populate("userInfo");
    return res.json(findBook).status(200);
  } catch (error) {
    return res
      .json({ "Sorry no data found on our database": error })
      .status(400);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const findBookById = await Book.findById({ _id: req.params.id });
    return res.status(200).json(findBookById);
  } catch (error) {
    return res
      .status(404)
      .json({ "Sorry no data found on our database": error });
  }
});

router.post("/", verify.verifytoken, async (req, res) => {
  let { author, title, serialNo, publicationDate } = req.body;

  try {
    const firstBook = new Book({
      author,
      title,
      serialNo,
      publicationDate,
      userInfo: req.user.id,
    });

    const savedBook = await firstBook.save();

    return res
      .status(200)
      .json({ "Book successfully saved into database": savedBook });
  } catch (error) {
    return res.status(400).json({ "Error saving a book": error });
  }
});

router.delete("/:id", verify.verifytoken, async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ msg: "Book not found" });

    // Making sure user post the book

    if (book.userInfo.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    const findBook = await Book.findByIdAndDelete({ _id: req.params.id });

    return res.status(200).json({ "Deleted Book is ": findBook });
  } catch (error) {
    return res
      .status(400)
      .json({ "Dababase cannot delete delected Book ": error });
  }
});

router.put("/:id", verify.verifytoken, async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ msg: "Book not found" });

    // Making sure user post the book
    console.log(book.userInfo);
    console.log(req.user.id);
    if (book.userInfo.toString() !== req.user.id)
      return res.status(401).json({ msg: "Not authorized" });

    const updateBook = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    return res.status(200).json({ "Updated Book ": updateBook });
  } catch (error) {
    return res
      .status(400)
      .json({ "Book cannot be updated, try again later ": error.message });
  }
});

module.exports = router;
