const clientNet = require("net");
const port = 3000;

const client = clientNet.connect({ port: port, host: 'localhost' }, function () {
    console.log("연결 성공");
    console.log('local = ' + this.localAddress + ':' + this.localPort);
    console.log('remote = ' + this.remoteAddress + ':' + this.remotePort);

    this.setEncoding('utf8');

    localport = this.localPort;
});

client.on('data', function (data) {
    console.log("받은 데이터 : " + data);
});

process.stdin.resume();
process.stdin.on('data', function (chunk) {
    client.write('에코 :' + chunk);
});