const express = require('express');
const app = express();
const memo = require('./api/memo');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('../Frontend'));
app.use('./memo', memo);

module.exports = app;