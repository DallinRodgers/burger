require("dotenv").config();
const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var orm = require("./config/orm");

// // orm.selectAll();
// // Works
// // orm.insertOne("This is a test", false);
// // Works
// // orm.updateOne(2, true);
// orm.selectAll();

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
