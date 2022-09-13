const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');

router.get('/', function (req, res) {
    res.json({ message: "Hello from Express!" });
})

router.post('/', async(req, res)=>{
    res.render("backend post req success")
})


module.exports = router;