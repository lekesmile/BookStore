const express = require("express");
const config = require("./config/config");
require("./database/databaseConn");
const bodyParser = require("body-parser");
const cors = require("cors");
const book = require("./router/book");
const user = require("./router/user");
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const secrets = require("./config/config");
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

//Router
app.use("/api", book);
app.use("/api", user);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || secrets.PORT;
console.log(secrets.PORT)

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
