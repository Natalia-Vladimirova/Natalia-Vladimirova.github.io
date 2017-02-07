let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
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
        app: path.join(cwd, './app/src/app.js'),
		vendor: ["angular", "angular-route", "angular-resource"],
		styles: path.join(cwd, './app/styles/index.less'),
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
                loader: ExtractTextWebpackPlugin.extract('css!less'),
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
		}),
		new ExtractTextWebpackPlugin('[name].bundle.css', {
			allChunks: true
		})
    ]
};
