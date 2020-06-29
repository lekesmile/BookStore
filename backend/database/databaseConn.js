const mongoose = require("mongoose");
const config = require('../config')


//Mongose Conection

try {
    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false);
    mongoose.connect(config.dbcUrl, { useNewUrlParser: true,  useUnifiedTopology: true})
      .then(()=>{
         console.log("We're connected to db") 
      }) 
    } catch (error) {
        console.log("Error connecting to the database" + error)
    }

