const express = require('express');
const router = express.Router();

router.get("/view_collection", function (req, res) {
    res.send("Collection page");
});

module.exports = router;