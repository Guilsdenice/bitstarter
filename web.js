var express = require('express');

var app = express.createServer(express.logger());

var fs = require ('fs');

buf = new Buffer(256);

var content = fs.readFileSync('index.html','utf8');

console.log(content)

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
