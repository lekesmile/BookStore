const mongoose = require("mongoose");
const secret = require("../config/config");

//Mongose Conection

try {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.connect(secret.DBC_URL).then(() => {
    console.log("We're connected to Mongodb");
  });
} catch (error) {
  console.log("Error connecting to the database" + error);
}
