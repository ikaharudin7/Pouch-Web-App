var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.json({ message: "Hello from Express!" })
});

router.get("/aboutus", function (req, res) {
    res.send("About us: PROYEK-TI");
});

module.exports = router;