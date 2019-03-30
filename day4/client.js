const net = require('net');

var client = net.connect({port: 3000, host:'192.168.0.2'},function(){
    console.log('Client connected');
});

client.on('data',function(data){//data 이벤트 발생시 callback
    console.log(data.toString());
    client.write(data.toString());
    client.end();
});

client.on('end',function(){//end 이벤트 발생시 callback
    console.log('Client disconnected');
});
