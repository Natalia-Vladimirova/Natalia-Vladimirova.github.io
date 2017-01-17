let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();

module.exports = {
    output: {
        path: path.join(cwd, 'dist'),
        publicPath: 'http://127.0.0.1:8000/',
        filename: "[name].bundle.js"
    },
	resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less'],
        root: cwd,
        modulesDirectories: [cwd, 'node_modules']
    },
    entry: {
        app: path.join(cwd, 'components/app')
    },
    module: {
        loaders: [
            {
                test: /\.js[x]*$/,
                loader: 'babel-loader',
				include: path.join(cwd, 'components')
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            },
			{
				test: /\.json$/,
				loader: 'json'
			}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
		new HtmlWebpackPlugin({
		  inject: true,
		  template: 'index.html',
		})
    ]
};
