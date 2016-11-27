module.exports = {
    entry: ["./src/site"],
    output: {
        path: __dirname + "/dist",
        filename: "build.js",
        library: "newsApp"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    }
};