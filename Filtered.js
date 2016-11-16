var fs = require('fs');
var bur = process.argv[2];
var extension = '.' + process.argv[3];
fs.readdir(bur, function(err, list) {
    if (err) {
        console.warn(err);
    }
    for (var i = 0; i < list.length; i++) {
        if (list[i].match(extension)) {
            console.log(list[i]);
        }

    }
})