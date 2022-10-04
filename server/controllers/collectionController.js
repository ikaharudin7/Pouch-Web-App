const mongoose= require('mongoose')
const {db} = require('../models/index')
const {Item} = require('../models/item')
var fs = require('fs');
var path = require('path');

exports.addNewItem = async (req, res) =>{
    var obj = {
        ownerID: "user",
        name: "666",
        desc: "testing",
        img: {
            data: fs.readFileSync(path.join(__dirname + '/eye.png')),
            contentType: 'image/png',
        }
    }
    db.collection('item+image').insertOne(obj, function(err, res) {
      if(err) throw err;
      console.log("Test image added");
      console.log(obj);
    });
}

const updateItem = async(req, res)=> {
    db.collection('collectors').findOneAndUpdateOne(
        {_name : req.body.name}, req.body, {new:true}
    )
};

const deleteItem = async(req, res) => {
    var Item = req.body.Item
    db.collection('collectors').deleteOne(Item, function(err, res) {
        if(err) throw err;
        console.log("One Item deleted");
    });
}