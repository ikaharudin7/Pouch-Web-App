const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');

router.get('/profile', function (req, res) {
    res.send('This is the profile page');
})

router.get('/profile', function (req, res) {
    res.send(pController.test);
})

module.exports = router;