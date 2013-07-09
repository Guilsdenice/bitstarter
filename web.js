var express = require('express');

var app = express.createServer(express.logger());

var fs = require ('fs');

var content = fs.readFileSync('index.html');

var content2 = content.toString('utf8');

console.log(content2);

app.get('/', function(request, response) {
  response.send(content2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
