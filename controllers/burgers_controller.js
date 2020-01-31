var express = require('express');
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res){
    burger.all(function(data){
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

// Export routes for server.js to use.
module.exports = router;