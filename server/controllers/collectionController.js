const mongoose= require('mongoose')
const Item = require('../models/item')
const {db} = require('./models/index')
const {Item} = require('./models/item')

const addNewItem = async (req, res) =>{
    var Item = {
        ownerID: req.body.ownerID,
        name: req.body.name,
        cost: req.body.cost,
        description: req.body.description
    }

    db.collection('collector').insertOne(Item, function(err, res) {
        if(err) throw err;
        console.log("One Item added");
    });
}

const updateItem = async(req, res)=> {
    db.collection('collector').findOneAndUpdateOne(
        {_name : req.body.name}, req.body, {new:true}
    )
};

const deleteItem = async(req, res) => {
    var Item = req.body.Item
    db.collection('collector').deleteOne(Item, function(err, res) {
        if(err) throw err;
        console.log("One Item deleted");
    });
}