const merge = require('webpack-merge'),
UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
common = require('./webpack.common'),
webpack = require('webpack')

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})