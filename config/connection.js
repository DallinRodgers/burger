var password = require("../server");

console.log("Connection: " + password);
// Connect to MYSQL Database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "bamazon_db"
});
