const mongoose= require('mongoose')
var ObjectId = require('mongodb').ObjectId; 
const {db} = require('../models/index')
const {Item} = require('../models/item')
var fs = require('fs');
var path = require('path');

exports.addNewItem = async (req, res) =>{
    var obj = {
        ownerID: req.body.ownerID,
        name: req.body.name,
        desc: req.body.desc,
        img: req.body.img,
        date: req.body.date,
    }
    db.collection('test image').insertOne(obj, function(err, res) {
      if(err) throw err;
      console.log("Test image added");
      console.log(obj);
    });
}

exports.updateItem = async(req, res)=> {
    var id = req.body._id
    var Item = req.body
    var o_id = new ObjectId(id)
    db.collection('test image').updateOne({_id: o_id}, { $set: {name: req.body.name, desc: req.body.desc, img: req.body.img}}, {upsert: true}, function(err, res) {
        if(err) throw err;
        console.log("One Item Updated");
        console.log(id)
    });
};

exports.deleteItem = async(req, res) => {
    var id = req.body._id
    var o_id = new ObjectId(id)
    db.collection('test image').deleteOne({_id: o_id}, function(err, res) {
        if(err) throw err;
        console.log("One Item deleted");
        console.log(id)
        
        // console.log(db.collection('test image').find({_id: ID}))
    });
}

exports.addBrowse = async (req, res) =>{
    var obj = {
        ownerID: req.body.ownerID,
        name: req.body.name,
        desc: req.body.desc,
        img: req.body.img,
        date: req.body.date,
    }
    db.collection('browse').insertOne(obj, function(err, res) {
      if(err) throw err;
      console.log("Test image added");
      console.log(obj);
    });
}