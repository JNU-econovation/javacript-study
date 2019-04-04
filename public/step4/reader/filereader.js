const readline = require('readline');
const fs = require('fs');
const fileName = 'data.txt';

const readlineInterface = readline.createInterface({
    input: fs.createReadStream(fileName)
});
    
readlineInterface.on('line', function(line){
    const rows = line.split(' ');
    console.log(rows[0]);
});