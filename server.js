const http = require('http');
http.createServer( (req , res) => {
    response.writeHead(200 , {'content : type' : 'text/plain'});
    response.end('Hello');
} ).listen(8081);
console.log('server running on http://127.0.0.1:8081/');