var http = require('http');
var url = process.argv[2];
var expect = ''; //without additional API, because npm install bl does not work.
http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('error', (err) => {
        console.error(err)

    });
    response.on('data', (data) => {
        expect += data;
    });
    response.on('end', () => {
        console.log(expect.length)
        console.log(expect);
    });
});