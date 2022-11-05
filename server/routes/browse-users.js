const express = require('express');
const router = express.Router();
const mongoose= require('mongoose');
const {db} = require('../models/index');

router.get('/', async(req, res) => {
    var userList = await db.collection('users').find().toArray();
    res.send(userList);
});

module.exports = router;