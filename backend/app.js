const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const book = require("./router/book");
const user = require("./router/user");

require("./database/databaseConn");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// Checking id production
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//Router
app.use("/", book);
app.use("/", user);

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
