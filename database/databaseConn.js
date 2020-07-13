const mongoose = require("mongoose");
const secret = require("../config");

//Mongose Conection

try {
  mongoose.set("useCreateIndex", true);
  mongoose.set("useFindAndModify", false);
  mongoose
    .connect(secret.dbcUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useMongoClient: true,
    })
    .then(() => {
      console.log("We're connected to Mongodb");
    });
} catch (error) {
  console.log("Error connecting to the database" + error);
}
