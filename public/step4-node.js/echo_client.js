const client = net.connect({port:port, host: 'localhost'}, function() {
    console.log('connected to server.');
    client.write("Hello! \r\n");
});

client.on('data', function(data) {
    console.log("message from server : " + data.toString());
    client.end();
});

client.on('end', function() {
    console.log('connection ended.');
});