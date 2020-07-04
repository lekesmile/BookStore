const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({

 
    name:{
        type:String,
        min: [3, 'Username must be more than 3 letters'],
        lowercase: true,
        required:true,
        trim: true
    },
    email:{
        type:String,
        min:6,
        unique: true,
        required: true
    },
    password:{
        type:String,
        min:4,
        required:[true, 'Password is required']
    },
    registerd:{
        type:Date,
        default: Date.now
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    },

    bookPublished: [{ type: Schema.Types.ObjectId, ref: 'Book' }]

})

const User = mongoose.model('User', UserSchema)
module.exports = User