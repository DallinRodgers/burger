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

router.post("/api/burgers", function(req, res){
    // console.log(req.body.burger_name);
    burger.create(req.body.burger_name, false, function(result){
        res.json({ id: result.insertId })
    });
});

// Export routes for server.js to use.
module.exports = router;