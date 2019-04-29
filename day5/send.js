const express = require('express');
const app = express();
const multer = require('multer');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/uploads/');
    },
    filename: function(req, file, callback) {
        var ext = file.originalname;
        callback(null, ext);
    }
}),
upload = multer({ storage: storage }).single('getfile');

app.get('/', function(req, res){res.render('main');});


app.post('/photo', upload, function (req, res, next) {
    const fileName = req.file.filename;
    res.render('result', { title: 'Express', fileName : fileName});
    console.log('post-photo request');
});


app.listen(5500, function(){console.log("server started");});