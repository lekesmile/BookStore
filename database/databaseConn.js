const mongoose = require("mongoose");
const secret = require("../config/config");
// //Mongose Conection

const url = secret.DBC_URL;
const ServerUrl = process.env.MONGODB_URL;
const LocalUrl = "mongodb://localhost:27017/BookStore";

try {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(ServerUrl || LocalUrl).then(() => {
    console.log("We're connected to Mongodb");
  });
} catch (error) {
  console.log("Error connecting to the database" + error);
}
