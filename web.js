var express = require('express');

var app = express.createServer(express.logger());

var fs = require ('fs');


var resp = fs.readFile('index.html',function (err, data) {
  if (err) throw err;
  data.toString('utf8');
});

app.get('/', function(request, response) {
  response.send(fs.readFile('index.html',function (err, data) {
  if (err) throw err;
  data.toString('utf8');
}));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
