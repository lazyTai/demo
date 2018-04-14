var webpack = require('webpack')
var path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractLess = new ExtractTextPlugin('stylesheets/antd.css');
let extractCss = new ExtractTextPlugin('stylesheets/dingyi.css');
const config = {
    extractLess,
    extractCss,
    entry: {
        index: path.resolve("./src/app.js"),
    },
    resolve: {},
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "react-router": 'ReactRouter',
        'redux': 'Redux',
        'echarts': 'echarts'
    },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name]/[name].js',
        publicPath: './',
        // 添加 chunkFilename
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [path.resolve('./src')]
            },


// {
//     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//     loader: 'url-loader',
//     query: {
//         limit: 10000,
//         // name: utils.assetsPath('img/[name].[hash:7].[ext]')
//     }
// },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve('./'),
            exclude: ['static', "favicon.png"],
            verbose: true,
            dry: false
        }),
    ],
}

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: ['manifest'],
    async: true,
    children: true,
    minChunks: 3,
}));


module.exports = config
