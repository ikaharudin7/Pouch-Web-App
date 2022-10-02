const express = require('express');
const router = express.Router();
var imgModel = require('../models/image');
const { db } = require('../models/user');

router.get("/view_collection", function (req, res) {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    console.log(req);
});

module.exports = router;