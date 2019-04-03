const net = require('net');
const portNum = 3000;
const ip = '192.168.0.2';

var client = net.connect({port: portNum, host: ip},function(){
    console.log('Client connected');
});

client.on('data',function(data){
    console.log(data.toString());
});

client.on('end',function(){
    console.log('Client disconnected');
});

process.stdin.resume();
process.stdin.on('data', function (chunk) {
    client.write('에코 :' + chunk);
}); 
