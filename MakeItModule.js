var fs = require('fs');
var directory = process.argv[2];
var extension = process.argv[3];
module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (err, data) => {
        if (err) {
            return callback(err);
        }
        var list = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].match('.' + extension)) {
                list.push(data[i]);
            }

        }
        callback(null, list);
    });
};