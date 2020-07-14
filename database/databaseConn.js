const mongoose = require("mongoose");
const secret = require("../config/config");
require("dotenv").config();

//Mongose Conection

const url = process.env.DBC_URL;
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
