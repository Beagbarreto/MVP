var express = require('express');
var bodyParser = require('body-parser');
//var items = require('../database-mongo');
var app = express();

//midleware goes here
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/', function(req, res){
  res.render('index');
  //items.selectAll(function(err, data) {
    if(err){
      res.sendStatus(500);
    } else {
      res.json(data);
    }
//});
});

app.listen(3000, function(){
  console.log("It's alive!");
});



/*
var users = [{
  name: 'Eduardo'
  e-mail: 'urrutia.e14@gmail.com'
},
{
  name: 'Miri'
  e-mail: 'unicorns@gmail.com'
}];
*/
