var connection = require("./connection.js");

// selectall, insertone, updateone
var orm = {
  selectAll: function(callBack) {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      // console.log(result);
      callBack(result);
    });
  },
  insertOne: function(burgerName, isDevoured, callBack){
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);";
    connection.query(queryString, [burgerName, isDevoured], function(err, result){
      if(err) throw err;
      console.log(result);
      callBack(result);
    })
  },
  updateOne: function(updateThisOne, isDevoured, callBack){
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(queryString, [isDevoured, updateThisOne], function(err, result){
      if(err) throw err;
      console.log("Burger is Devoured");
      callBack(result);
    })
  }
};

module.exports = orm;
