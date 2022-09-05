const express = require("express");
const app = express();

app.use('/', require("./routes/home"));
app.use('/', require("./routes/profile"));
app.use('/', require("./routes/collection"));

const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));