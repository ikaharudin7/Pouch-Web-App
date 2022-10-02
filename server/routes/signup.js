const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.send('This is the profile page');
    res.send(req.user);
})

router.post('/', userController.addNewUser);

module.exports = router;