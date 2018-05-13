var webConfig = require('./webpack.dev')
var express = require('express')
var app = express();
/* 设置静态目录 */
app.use('/', express.static('./dist'));
app.listen(3001, function () {
    console.log("listent to 3001")
})