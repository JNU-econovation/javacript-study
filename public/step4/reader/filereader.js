const readline = require('readline');
const fs = require('fs');
const fileName = 'data.txt';

let rl = readline.createInterface({
    input: fs.createReadStream(fileName)
});
    
rl.on('line', function(line){
    const rows = line.split(' ');
    console.log(rows[0]);
});