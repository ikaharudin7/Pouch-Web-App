const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');

router.get('/', function (req, res) {
    res.send('This is the profile page');
})

router.get('/', function (req, res) {
    res.send(pController.test);
})

module.exports = router;