const fs = require('fs');
const readline = require('readline')

function readByOneLineInFile(filename) {
    const stream = fs.createReadStream(filename);
    const reader = readline.createInterface(stream, process.stdout,null);

    let count = 0;

    reader.on('line', function (line) {
        count += 1;
        const tokens = line.split(' ');

        if (tokens != undefined && tokens.length > 0) {
            console.log('#' + count + ":" + tokens[0])
        }
    });

    reader.on('close', function (line) {
        console.log('모두 읽음');
    });
}

const filename = './public/data/member.txt';
readByOneLineInFile(filename);