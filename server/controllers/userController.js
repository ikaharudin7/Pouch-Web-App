const mongoose= require('mongoose')
const {db} = require('./models/index')
const User = require('./models/user')

const addNewUser = async (req, res) =>{
    var User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password:req.body.password
    }

    db.collection('collector').insertOne(User, function(err, res) {
        if(err) throw err;
        console.log("One User added");
    });
}

const updateItem = async(req, res)=> {
    db.collection('collector').findOneAndUpdateOne(
        {_username : req.body.username}, req.body, {new:true}, function(err, res){
            if(err) throw err;
            console.log("One User updated");
        }
    )
};

const deleteItem = async(req, res) => {
    var User = req.body.User
    db.collection('collector').deleteOne(User, function(err, res) {
        if(err) throw err;
        console.log("One User deleted");
    });
}