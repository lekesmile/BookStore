const mongoose = require("mongoose");


//Mongose Conection

try {
    mongoose.set('useCreateIndex', true)
    mongoose.set('useFindAndModify', false);
    mongoose.connect("mongodb://localhost:27017/BookStore", { useNewUrlParser: true,  useUnifiedTopology: true})
      .then(()=>{
         console.log("Database connection OK") 
      }) 
    } catch (error) {
        console.log("Error connecting to the database" + error)
    }
