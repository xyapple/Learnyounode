var http = require('http');
var map = require('through2-map')
var url = process.argv[2];
var upperServer = http.createServer(function(request, response) {
    if (request['method'] == 'POST') {
        request.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }
});
upperServer.listen(url);