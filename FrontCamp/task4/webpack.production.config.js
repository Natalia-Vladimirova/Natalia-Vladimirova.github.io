var webpack = require('webpack');

module.exports = {
    entry: ["./src/site"],
    output: {
        publicPath: 'dist/',
        path: __dirname + "/dist",
        filename: "build.min.js",
        library: "newsApp"
    },
    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: __dirname + "/",
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
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: 'production',
            API_KEY: "'8ac8c1098fbe4ec0b3f6e8851facac4a'",
            SOURCE_SITE: "'https://newsapi.org/v1'"
        })
    ]
};
