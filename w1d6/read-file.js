var fs = require("fs");

var input = process.argv[2];

fs.readFile(input, function(err, data) {
    if (err) throw err;
    console.log(data.toString());
    
});