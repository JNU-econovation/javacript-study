const fileName = "./output.txt"

const fs = require('fs');
const readStream = fs.createReadStream(fileName, {flags: 'r'});
const readline = require("readline");
const reader = readline.createInterface(readStream, process.stdout);

reader.on('line', function(line) {
    var userInfo = line.split(" ");
    if(line != undefined && line.length !=0){
        console.log(userInfo[0]);
    }
});