var fs = require('fs');
var readStream = fs.createReadStream('./output.txt', {flags: 'r'});
var readline = require("readline");
var reader = readline.createInterface(readStream, process.stdout);

reader.on('line', function(line) {
    var userInfo = line.split(" ");
    if(line != undefined && line.length !=0){
        console.log(userInfo[0]);
    }
});