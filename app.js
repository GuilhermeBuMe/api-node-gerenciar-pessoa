var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routerApiV1 = require('./routes/apiV1');
var routerApiV2 = require('./routes/apiV2');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1/', routerApiV1);
app.use('/v2/', routerApiV2);

module.exports = app;
