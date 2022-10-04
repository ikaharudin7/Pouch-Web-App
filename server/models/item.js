const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    ownerID : {type: String, required: true},
    name : {type: String, required: true},
    description : {type: String},
    img:
    {
        data: Buffer,
        contentType: String,
        required: true
    }
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item