const http = require('http');
const server = http.createServer();
const fs = require('fs');
const host = '192.168.0.2';
const port = 3000;

server.listen(port, host, 50000, function() {
    console.log("web server start : " + port + ',' + host);
    const array = fs.readFileSync('info.json');
    let parsed = JSON.parse(array);
    
    for(i in parsed.info) {
        console.log(parsed.info[i].name);
    }
});

server.on('connection', function(socket) {
    console.log("client is connected");
});

server.on('request', function(req, res) {
    console.log("client requested : ");
});