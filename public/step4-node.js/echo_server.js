const port = 8838;

const net = require('net');
const server = net.createServer(function (client) {
    console.log('client is connected to server');

    client.on('data', function(data) {
        console.log('message from client : ' + data.toString());
        client.write(data.toString());
    });

    client.on('end', function() {
        console.log('client connection ended.');
    });
});

server.listen(port, function() {
    console.log('server executed.');
});