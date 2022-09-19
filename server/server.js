const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");


// USE commands
app.use(cors());
app.use(express.json()) // needed if POST data is in JSON format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  
app.use('/profile', require("./routes/profile"));

app.use('/signup', require("./routes/signup"));

// Connect to the database
mongoose.connect('mongodb+srv://josh:test123@cluster0.jvj0nic.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
  
// Test if the connection was made
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));