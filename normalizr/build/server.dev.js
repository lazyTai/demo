var webConfig = require('./webpack.dev')
var express = require('express')
var app = express();
var webpack = require('webpack');
var compiler = webpack(webConfig)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webConfig.output.publicPath,
    quiet: true
})
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => { }
})

/*change outputsystem  out out file to dist no memory*/
// const MemoryFS = require("memory-fs");
// const fs = new MemoryFS();
// compiler.outputFileSystem = fs;
// compiler.run((err, stats) => {
//     // Read the output later:
//
//     console.log(stats)
//     // const content = fs.readFileSync("...");
// });

/*开代理 解决跨域问题*/
// 代理插件
var proxy = require('http-proxy-middleware');
// 跨域插件
var cors = require('cors');
app.use(cors());
// serve webpack bundle output
app.use(devMiddleware)
app.use(hotMiddleware)
/* 设置静态目录 */
app.use('/', express.static('./dist'));

// 设置代理
/*获取参数*/
var argv = require('yargs').argv;
console.log("代理开在",argv.domain)
app.use('/DYApi', proxy({
    target:argv.domain||'http://localhost:3001',
    changeOrigin: true
}));

app.listen(3000, function () {
    console.log("listent to 3000")
})