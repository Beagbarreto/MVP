var express = require('express');
var bodyParser = require('body-parser');
//var database = require('./database');
var app = express();

//midleware goes here
app.use(bodyParser.json());

var users = [{
  name: 'Eduardo'
  e-mail: 'urrutia.e14@gmail.com'
},
{
  name: 'Miri'
  e-mail: 'unicorns@gmail.com'
}];

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3000, function(){
  console.log("It's alive!");
})
