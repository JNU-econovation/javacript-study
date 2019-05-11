const express = require('express');
const router = express.Router();
const ctrl = require('./memo.ctrl');
const multer = require('multer');
const storage = multer.diskStorage({
      destination: (req, file, callback) => {
        callback(null, '../../uploads') 
      },
      filename: (req, file, callback) => {
        callback(null, file.originalname)
      }
});

const upload = multer({ 
    storage: storage,
});

router.post("/", upload.single('imageFile'), ctrl.create);

module.exports = router;
