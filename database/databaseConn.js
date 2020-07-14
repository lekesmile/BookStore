const mongoose = require("mongoose");
const secret = require("../config/config");
var mongodb = require("mongodb");
// //Mongose Conection

const url = secret.DBC_URL;

// try {
//   mongoose.set("useNewUrlParser", true);
//   mongoose.set("useFindAndModify", false);
//   mongoose.set("useCreateIndex", true);
//   mongoose.set("useUnifiedTopology", true);
//   mongoose.connect(url).then(() => {
//     console.log("We're connected to Mongodb");
//   });
// } catch (error) {
//   console.log("Error connecting to the database" + error);
// }

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(url, { useUnifiedTopology: true }, function (
  err,
  client
) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");
});
