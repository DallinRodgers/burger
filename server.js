require("dotenv").config();
const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;

// Password from .env file
const password = process.env.DB_PASS;
console.log("server.js " + password);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var orm = require("./config/orm");

orm.selectAll();

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
