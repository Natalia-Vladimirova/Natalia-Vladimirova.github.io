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
            NODE_ENV: 'debug',
            API_KEY: "'8ac8c1098fbe4ec0b3f6e8851facac4a'",
            SOURCE_SITE: "'https://newsapi.org/v1'"
        })
    ]
};
