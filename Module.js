var makeModule = require('./MakeItModule.js'); // directory name

makeModule(process.argv[2], process.argv[3], function(err, list) {
    if (err) {
        console.error(err)
    }
    for (x in list) {
        console.log(list[x]);
    }
});