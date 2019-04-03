const serverNet = require('net');

const server = serverNet.createServer(function (socket) {
    socket.name = socket.remoteAddress + ":" + socket.remotePort;
    console.log('클라이언트 연결 : ' + socket.name);

    socket.on('data', function (data) {
        console.log('reciecvedata : ' + data);
        socket.write(data);
    });

    socket.on('end', function () {
        console.log("연결 끝 : " + socket.name);
    });
});

const port = 3000;
server.listen(port);

console.log('소켓 서버 실행됨' + port);