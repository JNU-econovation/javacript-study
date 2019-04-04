const readline = require('readline');
const fs = require('fs');

let rl = readline.createInterface({
    input: fs.createReadStream('data.txt')
});
    
rl.on('line', function(line){
    const rows = line.split(' ');
    console.log(rows[0]);
});