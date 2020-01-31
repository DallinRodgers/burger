var orm = require('../config/orm.js')

// Works
// orm.insertOne("This is a test", false);
// Works
// orm.updateOne(2, true);
// orm.selectAll();

var burger = {
    all: function(cb){
        orm.selectAll(function(result){
            cb(result);
        })
    },
    create: function(burgerName, isDevoured, cb){
        orm.insertOne(burgerName, isDevoured, function(result){
            cb(result);
        });
    },
    update: function(updateThisOne, isDevoured, cb){
        orm.updateOne(updateThisOne, isDevoured, function(result){
            cb(result);
        })
    }
}

module.exports = burger;