var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(400, {'Content-Type': 'text/plain'});
 res.end('Hello World! \n');
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080');