var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');

module.exports = {
    entry: ["./src/site"],
    output: {
        publicPath: 'dist/',
        path: __dirname + "/dist",
        filename: "build.js",
        library: "newsApp"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            }
        ]
    },
    plugins: [
        new StatsPlugin('stats.json'),
        new webpack.DefinePlugin({
            NODE_ENV: 'debug'
        })
    ]
};
