const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploads/');
    },
    filename: function(req, file, cb) {
        var ext = file.originalname;
        cb(null, ext);
    }
}),
upload = multer({ storage: storage }).single('getfile');

app.get('/', function(req, res){res.render('main');});

app.post('/process/photo', upload, function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8',
    });
    res.end("<h1>메모가 저장되었습니다. </h1>" +
    "<p>서버에 저장된 사진</p>" +
    "<img src = 'http://localhost:5500/uploads/" + req.file.filename + "'>" + 
    "<a href ='/'>돌아가기</a>");
});


app.listen(5500, function(){console.log("server started");});