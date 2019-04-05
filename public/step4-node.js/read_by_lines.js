let fs = require('fs');
let readStream = fs.createReadStream('./output.txt', {flags: 'r'});
let readline = require("readline");
let reader = readline.createInterface(readStream, process.stdout);

reader.on('line', function(line) {
    var userInfo = line.split(" ");
    if(line != undefined && line.length !=0){
        console.log(userInfo[0]);
    }
});