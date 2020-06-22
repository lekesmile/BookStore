const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({

   author:{
      type: String,
      unique: true,
      required: true
   },

   title:{
      type:String,
      min:3,
      max:20,
      required: true
  
   },

   SerialNo:{
       type:Number,
       required: true
    
   },

   PublicationDate:{
       type:Number
       
   },
   
   Saved:{
       type:Date,
       default: Date.now
   }

 
});


const Book = mongoose.model('Book', BookSchema)

module.exports = Book;