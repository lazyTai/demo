var baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
// const BundleAnalyzerPlugin =
//     require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyzer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    minimize: true
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
                            minimize: true
                        },
                    }
                },
                {loader: 'less-loader', options: {javascriptEnabled: true}},
            ]
        })
    }])


var config = {
    externals: baseConfig.externals,
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: baseConfig.resolve,
    module: baseConfig.module,
    plugins: baseConfig.plugins
};

config.plugins.push(new HtmlWebpackPlugin({
    template: `./src/index.html`,
}));

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        drop_console: true,
        pure_funcs: ['console.log']
    },
    output: {
        comments: false,
    },
    sourceMap: false,
    mangle: true,
}))
config.plugins.push(baseConfig.extractLess)
config.plugins.push(baseConfig.extractCss)

// config.plugins.push(new analyzer())
module.exports = config