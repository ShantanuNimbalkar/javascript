console.log("Hello world");
let y=10;

var http = require('http');
var url = require('url');
var fs = require('fs');

var text;
var date = new Date()
switch (date.getDay()) {
 case 1:
 case 2:
 case 3:
 default:
    text = "Looking forward to the Weekend";
    break;
 case 4:
 case 5:
    text = "Soon it is Weekend";
    break;
 case 0:
 case 6:
      switch(date.getFullYear()){
      case 2015:
        text = "It is Weekend of last Year.";
      break;
      case 2016:
        text = "It is Weekend of this Year.";
      break;
      case 2017:
        text = "It is Weekend of next Year.";
      break;
      default:
      text = date.getDay();
      break;
    }
break;
}

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 





const num1 = 5;
const num2 = 3;
const num3 = 3;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
const x = 3;
