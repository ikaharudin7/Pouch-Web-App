const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');

router.get('/', function (req, res) {
    res.send('This is the profile page');
})


router.post('/', async(req, res)=>{
    res.json({message: "backend post req success"})
    console.log("Post WORKS");
    console.log(req.body);
})

module.exports = router;