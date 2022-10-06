const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');
var bodyParser = require('body-parser');
const mongoose= require('mongoose');
const {db} = require('../models/index');
const User = require('../models/user')

// For printing the json out
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

global.usern = { username : "" };

router.get("/", async(req, res) => {

    global.usern = req.user;
    res.send(usern);
    console.log(usern);

  });


router.post('/', async(req, res)=>{
    const myquery = { username : usern.username };
    const newvalues = { $set: { email : req.body.bio}};
    console.log(usern);
    console.log(req.body.bio);
    console.log(usern.username);
    db.collection('users').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    })
    
})


module.exports = router;