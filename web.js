var express = require('express');

var app = express.createServer(express.logger());

var fs = require ('fs');

var resp = fs.readFile('index.html','utf8',function (err, data) {
  if (err) throw err;
  data;
});

app.get('/', function(request, response) {
  response.send(fs.readFile('index.html','utf8',function (err, data) {
  if (err) throw err;
  data;
}));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
