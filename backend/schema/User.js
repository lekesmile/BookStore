const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username:{
        type:String,
        min: 3,
        required:true,
        unique:true
    },
    password:{
        type:String,
        min:4,
        required:true
    },
    registerd:{
        type:Date,
        default: Date.now
    },
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    }

})

const User = mongoose.model('User', UserSchema)
module.exports = User