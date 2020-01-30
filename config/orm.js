var connection = require("./connection.js");

// selectall, insertone, updateone
var orm = {
  selectAll: function() {
    connection.query("SELECT * FROM burgers", function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
