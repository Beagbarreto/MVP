var express = require('express');
var bodyParser = require('body-parser');
//var data = require('../database/data.js');
var database = require('../database/index.js');
var app = express();

app.use(bodyParser.json());

//midleware goes here
app.use(express.static(__dirname + '/../client/dist'));

app.get('/activities', function(req, res){
    database.selectAll((err, results)=>{
    if(err){
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.post('/activities', function(req, res){
  let day = req.body.day;
  let title = req.body.title;
  let hour = req.body.hour;
  let location = req.body.location;
  let description = req.body.description;
  if(!day){
    res.sendStatus(400);
  }else{
    database.insertOne(day, title, hour, location, description, (err, results) =>{
      if(err){
        res.sedStatus(500);
      }else{
        res.status(200).json(results);
      }
    })
  }
});

app.listen(3000, function(){
  console.log("It's alive!");
});
