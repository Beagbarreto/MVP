var express = require('express');
var bodyParser = require('body-parser');
//var items = require('../database-mongo');
var app = express();

//midleware goes here
app.use(express.static(__dirname + '/../client/dist'));

/*app.get('/', function(req, res){
  res.render('index');
  act.selectAll(function(err, data) {
    if(err){
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});*/

app.listen(3000, function(){
  console.log("It's alive!");
});
