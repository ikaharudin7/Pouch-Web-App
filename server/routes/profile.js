const express = require('express');
const router = express.Router();
const pController = require('../controllers/profileController');

router.get('/profile', function (req, res) {
    res.send('This is the profile page');
})

<<<<<<< Updated upstream
router.get('/profile', function (req, res) {
    res.send(pController.test);
=======
router.post('/', async(req, res)=>{
    res.json({message: "backend post req success"})
    console.log("Post WORKS");
>>>>>>> Stashed changes
})

module.exports = router;