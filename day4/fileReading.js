const fs = require('fs');

const run = function(){
    let file = fs.readFileSync('info.json', 'utf8');
    let parsed = JSON.parse(file);
      
    for(let i in parsed.info) {
        console.log(parsed.info[i].name);
    }
}

run();