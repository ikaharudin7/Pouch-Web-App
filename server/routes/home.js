var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    console.log(req);
});

router.get("/aboutus", function (req, res) {
    res.send("About us: PROYEK-TI");
});

module.exports = router;