const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    bio: {type: String},
    collections: {type: Object},
    img: {type: String},
})

const User = mongoose.model('User', userSchema)
module.exports = User