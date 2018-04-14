var webConfig = require('./webpack.dev')
var express = require('express')
var app = express();
var webpack = require('webpack')
var compiler = webpack(webConfig)


var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webConfig.output.publicPath,
    quiet: true
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { }
})


// serve webpack bundle output
app.use(devMiddleware)
app.use(hotMiddleware)
/* 设置静态目录 */
app.use('/', express.static('./dist'));


app.listen(3000, function () {
    console.log("listent to 3000")
})