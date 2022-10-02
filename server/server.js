const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const User = require("./models/user");
const { json } = require("body-parser");
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");
require('./models');
//----------------------------------------- END OF IMPORTS---------------------------------------------------
// Connect to the database
mongoose.connect('mongodb+srv://josh:test123@cluster0.jvj0nic.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "demo"
  }
);
  
// Test if the connection was made
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

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

app.get('/view_image', async(req, res) => {
  var myDocument = await db.collection('imagess').find({name: "test_image1"}).toArray();
  res.type("image/png").send(myDocument);
  //console.log(myDocument);
});

app.get('/image_test', upload.single('image'), (req, res) => {

 // var newimg = fs.readFileSync(path.join(__dirname + '/img.png'));
  //var encimg = newimg.toString('base64');

  var obj = {
      name: "test_image1",
      desc: "testing",
      img: {
          data: fs.readFileSync(path.join(__dirname + '/test_image.png')),
          contentType: 'image/png',
      }
  }
  db.collection('imagess').insertOne(obj, function(err, res) {
    if(err) throw err;
    console.log("Test image added");
    console.log(obj);
});
});


//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) { 
      res.send("No User Exists");
      //window.location.href = "http://localhost:3000/profile"
    } 
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(req.user);
        console.log(req.user);
      });
    }
  })(req, res, next);
});

app.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});

app.use('/profile', require("./routes/profile"));
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(8080, () => {
  console.log("Server Has Started");
});


app.get('/view_collection', async(req, res) => {
  var myItem = await db.collection('item+image').find({}).toArray();
  res.send(myItem);
  console.log(myItem);
}); 