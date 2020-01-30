var connection = require("./connection.js");

// selectall, insertone, updateone
var orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(burgerName, isDevoured){
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
    connection.query(queryString, [burgerName, isDevoured], function(err, result){
      if(err) throw err;
      console.log(result);
    })
  },
  updateOne: function(updateThisOne, isDevoured){
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(queryString, [isDevoured, updateThisOne], function(err, result){
      if(err) throw err;
      console.log("Burger is Devoured");
    })
  }
};

module.exports = orm;
