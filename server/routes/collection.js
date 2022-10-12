const express = require('express');
const router = express.Router();
const { db} = require('../models/index');

const collectionController = require('../controllers/collectionController')

router.get('/', function (req, res) {
    res.send('This is the collection page');
})

// Middleware for Getting and displaying images from database
// Set up middleware for image storage
var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

router.get("/view_collection", function (req, res) {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
    console.log(req);
});

router.post("/collection_test", upload.single('file'), collectionController.addNewItem);

router.delete("/collection_delete", upload.single('file'), collectionController.deleteItem)

module.exports = router;