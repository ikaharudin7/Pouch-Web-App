const express = require('express');
const router = express.Router();
const { db} = require('../models/index');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const collectionController = require('../controllers/collectionController')

// parsing the incoming data
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//serving public file
router.use(express.static(__dirname));
router.use(cookieParser());
var session;

router.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

module.exports = router;