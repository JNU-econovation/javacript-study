const io = require("socket.io-client");
const port = "8080";
const socket = io.connect("http://localhost:" + port);

socket.on('message', (data) => {
    console.log('receive message : ' + data);
    socket.emit('message', data);
})