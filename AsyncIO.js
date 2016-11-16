var fs = require('fs');
var bur = process.argv[2];
fs.readFile(bur, function(err, data) {
    if (err) {
        console.warn(err);
    }
    var str = data.toString();
    var split = str.split('\n');
    var nLines = split.length - 1;
    console.log(nLines);
})