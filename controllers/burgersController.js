var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/index", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    console.log("the lenngth of exising DB: "+ hbsObject.burgers.length);

    if(hbsObject.burgers.length>0){
      res.render("index", hbsObject);
    }

    else{
      res.render("initial");
    }
  });
});

router.post("/burgers", function(req, res) {
    console.log("New buger coming");
    console.log(res);
  burger.create([
    "burger", "devoured"
  ], [
    req.body.burger, false
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
     return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
