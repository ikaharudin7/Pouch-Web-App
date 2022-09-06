const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    ownerID : {type: String, required: true},
    name : {type: String, required: true},
    cost : {type: Double},
    description : {type: String}
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item