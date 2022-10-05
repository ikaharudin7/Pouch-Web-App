const mongoose= require('mongoose')
const {db} = require('../models/index')
const {Item} = require('../models/item')
var fs = require('fs');
var path = require('path');

exports.addNewItem = async (req, res) =>{
    var obj = {
        ownerID: req.body.ownerID,
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: req.body.data,
            contentType: req.body.contentType,
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