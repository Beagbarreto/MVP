var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "review"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM activities', (err, results, fields)=> {
    if(err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

var insertOne = function(day, title, hour, location, description, cb) {
  con.query('INSERT INTO activities (day, title, hour, location, description) VALUES (?, ?, ?, ?, ?)',
    [day, title, hour, location, description], (err, results, fields) => {
      if(err) {
        cb(err, null);
      } else {
        console.log(results);
        cb(null, results);
      }
    });
};

module.exports.selectAll = selectAll;
module.exports.insertOne = insertOne;
