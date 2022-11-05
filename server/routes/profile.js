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

router.get("/", async(req, res) => {
  const user = { username : req.session.userid.username };
  
  //db.collection('users').find({});

  db.collection('users').find(user).toArray(function(err, result){
    if (err) throw err;
    console.log(result);

    res.send({username: user.username, bio: result[0].bio, img: result[0].img});

  });


  });


router.post('/', async(req, res)=>{
    const myquery = { username : req.body.username };
    const newvalues = { $set: { bio : req.body.bio, img: req.body.img}};

    db.collection('users').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    })
    
})


module.exports = router;