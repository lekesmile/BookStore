const express = require("express");
require("dotenv").config();
const config = require("./config/config");
require("./database/databaseConn");
const bodyParser = require("body-parser");
const cors = require("cors");
const book = require("./router/book");
const user = require("./router/user");
const path = require("path");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

//Router
app.use("/", book);
app.use("/", user);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // import env file
  require("dotenv").config();
  config;
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
