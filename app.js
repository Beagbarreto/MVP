var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

//midleware goes here

app.get('/', function(req, res){
  res.send("I've created a monster");
});

app.listen(3000, function(){
  console.log("It's alive!...");
})
