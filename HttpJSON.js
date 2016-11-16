var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request['method'] == 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        var parsedRequest = url.parse(request.url, true);
        var date = new Date(parsedRequest.query['iso']);

        if (parsedRequest.pathname == "/api/parsetime") {
            date = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        } else if (parsedRequest.pathname == "/api/unixtime") {
            date = {
                unixtime: date.getTime()
            };
        } else {
            response.writeHead(404, { 'Content-Type': 'application/json' });
        }
        response.end(JSON.stringify(date));
    }
})
server.listen(port);