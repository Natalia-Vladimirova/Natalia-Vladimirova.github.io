let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();

module.exports = {
    output: {
        path: path.join(cwd, 'app', 'dist'),
        publicPath: 'http://127.0.0.1:8080/',
        filename: "[name].bundle.js"
    },
	resolve: {
        extensions: ['', '.js', '.less'],
        root: cwd,
        modulesDirectories: [cwd, 'node_modules']
    },
    entry: {
        app: path.join(cwd, './app/src/app.js')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
				exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            },
			{
				test: /\.html$/,
				loader: 'raw-loader'
			}
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html',
			inject: 'body'
		})
    ]
};
