const fs = require('fs');

const array = function(){
    let file = fs.readFileSync('info.json', 'utf8');
    let parsed = JSON.parse(file);
      
    for(let i in parsed.info) {
        console.log(parsed.info[i].name);
    }
}

array();