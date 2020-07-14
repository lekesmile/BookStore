const mongoose = require("mongoose");
const secret = require("../config/config");

//Mongose Conection

// try {
//   mongoose.set("useNewUrlParser", true);
//   mongoose.set("useFindAndModify", false);
//   mongoose.set("useCreateIndex", true);
//   mongoose.set("useUnifiedTopology", true);
//   mongoose.createConnection(secret.DBC_URL).then(() => {
//     console.log("We're connected to Mongodb");
//   });
// } catch (error) {
//   console.log("Error connecting to the database" + error);
// }

const MongoClient = require("mongodb").MongoClient;
const uri = secret.DBC_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
