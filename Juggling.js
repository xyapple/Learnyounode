var http = require('http');
var results = [];
const args = process.argv.slice(2); //pass command line into node.js
args.forEach((any, index) => {
    http.get(any, (response) => {
        results[index] = '';
        response.on('data', (data) => {
            results[index] += data;
        });
        response.on('end', printOutAllURL);
    });
});

let endResults = 0;

let printOutAllURL = () => {
    endResults++;
    if (endResults != results.length) {
        return
    };
    results.forEach((results) => {
        console.log(results);
    });

}