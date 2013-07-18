var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var contentsBuffer = fs.readFileSync('index.html');
  var contents = contentsBuffer.toString();
  response.send(contents);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
