const express = require('express');
const router = express.Router();
var imgModel = require('../models/image');

router.get("/view_collection", function (req, res) {
    res.send("Collection page");
});

module.exports = router;