const express = require('express');
const router = express.Router();
var imgModel = require('../models/image');
const { db } = require('../models/user');

router.get("/view_collection", function (req, res) {
    res.send("Collection page");
});

module.exports = router;