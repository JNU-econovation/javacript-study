const port = 8080;
const io = require('socket.io');
const server = io.listen(port);

server.on('connection', (socket) => {
    const message = { content: 'hi, hello'};

    console.log('semd message : ' + message['content']);
    
    socket.emit('message', message['content']);
    socket.on('message', (data) => {
        console.log('receive message : ' + data);
    });
});
