const express = require('express');
const router = express.Router();
const { db} = require('../models/index');

const collectionController = require('../controllers/collectionController')


router.get('/', function (req, res) {
    this.usern.username = req.session.userid.username
    res.send("req.session.userid.username");
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
    res.send(this.usern);
});

router.post("/collection_test", upload.single('file'), collectionController.addNewItem);

router.patch("/collection_update", upload.single('file'), collectionController.updateItem);

router.delete("/collection_delete", upload.single('file'), collectionController.deleteItem);

router.delete("/browse_test", upload.single('file'), collectionController.addBrowse);


module.exports = router;