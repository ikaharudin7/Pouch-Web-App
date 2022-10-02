const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');
var bodyParser = require('body-parser')

// For printing the json out
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get("/", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    console.log(req);
  });
router.post('/', async(req, res)=>{

    console.log(req.body);
})

module.exports = router;