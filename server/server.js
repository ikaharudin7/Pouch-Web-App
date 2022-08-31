const express = require("express");
const app = express();
const profile = require('./routes/profile');
  
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/profile', profile);

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));