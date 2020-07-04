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

   serialNo:{
       type:Number,
       required: true
   },

   publicationDate:{
       type:Number,
       default: '00001'
   },
   
   saved:{
       type:Date,
       default: Date.now
   },

   userInfo: { type: Schema.Types.ObjectId, ref: 'User', required: true },
 
});


const Book = mongoose.model('Book', BookSchema)

module.exports = Book;