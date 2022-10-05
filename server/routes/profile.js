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



router.get("/", (req, res) => {

    //res.send('This is the profile page');
    res.send(req.user);

  // const data = req.user;
  //   console.log("INFO");
  //   console.log(typeof(req.username));
     console.log(req.user);
  //   console.log("---");
  //   res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    
  });


router.post('/', async(req, res)=>{

    const myquery = { username : req.body.username };
    const newvalues = { $set: {email: req.body.bio}};

    console.log(req.body.bio);
    console.log(req.body.username);
    db.collection('users').updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
    })
    
})


module.exports = router;