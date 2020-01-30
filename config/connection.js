var mysql = require("mysql");

var data = process.env;

// Connect to MYSQL Database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: data.DB_PASS,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
