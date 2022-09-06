const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/', require("./routes/home"));
app.use('/', require("./routes/profile"));
app.use('/', require("./routes/collection"));
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));