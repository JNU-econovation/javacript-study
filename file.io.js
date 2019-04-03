const fs = require('fs');
const readline = require('readline');
const filename = './public/data/member.txt';

function readByOneLineInFile(filename) {
    const stream = fs.createReadStream(filename);
    const reader = readline.createInterface(stream, process.stdout,null);

    reader.on('line', function (line) {
    });

    reader.on('close', function (line) {
        console.log('\n모두 읽음');
    });
}

readByOneLineInFile(filename);