const mongoose = require("mongoose");
const secret = require("../config/config");
// //Mongose Conection

const url = secret.DBC_URL || "mongodb://localhost:27017/bookstore";

try {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(url).then(() => {
    console.log("We're connected to Mongodb");
  });
} catch (error) {
  console.log("Error connecting to the database" + error);
}
