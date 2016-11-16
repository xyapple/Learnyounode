var fs = require('fs');
var bur = fs.readFileSync(process.argv[2]);
var str = bur.toString();
var split = str.split('\n');
var nLines = split.length - 1;
console.log(nLines);