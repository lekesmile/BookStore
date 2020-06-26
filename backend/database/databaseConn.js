const mongoose = require("mongoose");
const config = require('../config')


//Mongose Conection

try {
    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false);
    mongoose.connect(config.dbUrl, { useNewUrlParser: true,  useUnifiedTopology: true})
      .then(()=>{
         console.log("Database connection OK") 
      }) 
    } catch (error) {
        console.log("Error connecting to the database" + error)
    }

