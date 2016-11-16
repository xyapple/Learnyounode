var http = require('http');
var fs = require('fs');

url = process.argv[2];
extention = process.argv[3];
var server = http.createServer(function(request, response) {
    // request handling logic...
    fs.createReadStream(extention).pipe(response);
})
server.listen(url)