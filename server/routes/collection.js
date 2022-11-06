const express = require('express');
const router = express.Router();
const { db} = require('../models/index');

const collectionController = require('../controllers/collectionController')

router.get('/', function (req, res) {
    //NEED USERNAME HERE
    this.usern = req.session.userid.username
    res.send(req.session.userid.username);
    
})

router.get('/view_collection/:username', async(req, res) => {
    
    var id = await db.collection('users').findOne({"username": req.params.username});
    var myItem = await db.collection('test image').find({"ownerID":id._id.toString()}).toArray();
    console.log(myItem);
    res.send(myItem);
}); 

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

router.get('/view_collection', async(req, res) => {
    console.log(req.headers.id);
    var myItem = await db.collection('test image').find({"ownerID":req.headers.id}).toArray();
    res.send(myItem);
}); 

router.post("/collection_test", upload.single('file'), collectionController.addNewItem);

router.patch("/collection_update", upload.single('file'), collectionController.updateItem);

router.delete("/collection_delete", upload.single('file'), collectionController.deleteItem);

router.delete("/browse_test", upload.single('file'), collectionController.addBrowse);


module.exports = router;