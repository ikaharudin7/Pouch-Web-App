const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    ownerID : {type: String, required: true},
    name : {type: String, required: true},
    description : {type: String},
    img: {type: String},
    date: {type: Date},
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item