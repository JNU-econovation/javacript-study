const express = require('express');
const router = express.Router();
const ctrl = require('./memo.ctrl');

router.post('/', ctrl.create);

module.exports = router;
