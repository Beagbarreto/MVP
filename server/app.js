var express = require('express');
var bodyParser = require('body-parser');
//var database = require('/');
var app = express();

//midleware goes here
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("I've created a monster");
});

app.listen(3000, function(){
  console.log("It's alive!");
})
