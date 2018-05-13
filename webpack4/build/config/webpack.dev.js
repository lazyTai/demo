const path = require("path")
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const argv = require('yargs').argv
console.log(argv)
console.log(argv.domain)
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.DefinePlugin({
          "name":"'fuck'"
        })
    ]
}
