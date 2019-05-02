const express = require('express')
const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');
const static = require('serve-static');
const multer = require("multer")

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public', static(path.join(__dirname, 'public')));
app.use('/uploads', static(path.join(__dirname, 'uploads')))

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }),
}).single('userfile');

app.post("/save", function (req, res) {
    try {
        upload(req, res, function (err) {
            var name = req.body.name;
            var date = req.body.date;
            var content = req.body.content;
            var filename = req.file.filename;
            console.log(filename);
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
            res.write(`
            <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="/public/stylesheet/momo.css">
            <title>Document</title>
            </head>
            <form method="GET" action="/" id="re-form">
            <table class="header-table">
                <thead>
                    <th class="table-head">나의 메모</th>
                </thead>
                <tbody class="table-body">
                    <tr>
                        <td>${name},${date},${content}메모가 저장되었습니다.</td>
                    </tr>
                    <tr>
                        <td colspan="2" class="upload-display">
                            <div class="upload-thumb-wrap"><img class="upload-thumb" src="/uploads/${filename}"></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="footer-table">
                <tbody>
                    <tr><td id="re-layor"><button id="redirect" form = "re-form" type="submit" >다시작성</button></td></tr>
                </tbody>
            </table>
            </form>
            `);
            res.end();
        });

    } catch (err) {
        console.dir(err.stack);

        res.writeHead(400, { 'Content-Type': 'text/html;charset=utf8' });
        res.write('<div><p>메모 저장 시 에러 발생</p></div>');
        res.end();
    }

});

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/view/memo/memo.html");
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("서버시작");
});