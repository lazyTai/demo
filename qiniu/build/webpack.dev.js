var baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
var _ = require('lodash')
var newEntrys = {};
_.map(baseConfig.entry, (item, key) => {
    newEntrys[key] = ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', item]
})

baseConfig.module.rules = baseConfig.module.rules.concat([{
    test: /\.css$/,
    use: baseConfig.extractCss.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    module: true,
                    sourceMap: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('precss')(),
                        require('postcss-nested-import')]
                }
            },
        ]
    })
},
    {
        test: /\.less$/,
        use: baseConfig.extractLess.extract({
            fallback: 'style-loader',
            use: [
                ({resource}) => {
                    return {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            module: false,
                            sourceMap: true,
                        },
                    }
                },
                {loader: 'less-loader', options: {javascriptEnabled: true}},
            ]
        })
    }])
var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: newEntrys,
    externals: baseConfig.externals,
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    plugins: baseConfig.plugins
};

config.plugins.push(new HtmlWebpackPlugin({
    template: `./src/index.html`,
}));

config.plugins.push(baseConfig.extractLess)
config.plugins.push(baseConfig.extractCss)
config.plugins.push(new webpack.HotModuleReplacementPlugin())

module.exports = config