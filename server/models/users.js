const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    quote: {type: String, default:"You have no code"}
})

const User = mongoose.model('users', UserSchema)
module.exports=User