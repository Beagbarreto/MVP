var express = require('express');
var bodyParser = require('body-parser');
//var items = require('../database-mongo');
var app = express();

//midleware goes here
app.use(express.static(__dirname + '/../client/dist'));


app.listen(3000, function(){
  console.log("It's alive on port 3000!");
});
