const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const sessions = require("express-session");
const bodyParser = require("body-parser");
const User = require("./models/user");
const Item = require("./models/item");
const { json } = require("body-parser");
const app = express();
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");
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



// Middleware FOR COOKIES/SESSION TIME
var session;
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "secretkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

// General Middleware
app.use(bodyParser.json({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(
  sessions({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


app.get('/view_image', async(req, res) => {
  var myDocument = await db.collection('item+image').find({ownerID: "user"}).toArray();
  res.send(myDocument);
});


//----------------------------------------- END OF MIDDLEWARE---------------------------------------------------

// Routes

app.get('/login',(req,res) => {
  if (req.session.userid) {
    res.send({loggedIn: true, user: req.session.userid})
  } else {
    //console.log(req.session)
    res.send({loggedIn: false});
  }
});


app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) { 
      res.send("No User Exists");
    } 
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        session = req.session;
        session.userid = req.user;
        console.log(req.session)
        res.send(req.user);
        //console.log(req.user);
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



app.use('/signup', require("./routes/signup"));
//app.use('/login', require("./routes/login"));
app.use('/profile', require("./routes/profile"));
app.use('/home', require("./routes/home"));
app.use('/collections', require("./routes/collection"));
app.use('/browse-users', require("./routes/browse-users"))
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server
app.listen(8080, () => {
  console.log("Server Has Started");
});


app.get('/view_collection', async(req, res) => {
  //var username = req.session.userid.username;
  var myItem = await db.collection('test image').find({}).toArray();
  res.send(myItem);
  console.log(req);
}); 

app.get('/browse_collection', async(req, res) => {
  //var username = req.session.userid.username;
  var items = await db.collection('browse').find({}).toArray();
  res.send(items);
});

app.get('/browse_soccer', async(req, res) => {
  //var username = req.session.userid.username;
  var items = await db.collection('browse_soccer').find({}).toArray();
  res.send(items);
});

app.get('/browse_footy', async(req, res) => {
  //var username = req.session.userid.username;
  var items = await db.collection('browse_footy').find({}).toArray();
  res.send(items);
});

app.get('/browse_basketball', async(req, res) => {
  //var username = req.session.userid.username;
  var items = await db.collection('browse_basketball').find({}).toArray();
  res.send(items);
});

