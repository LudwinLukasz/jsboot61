//webpack.config.js
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

const path = require('path');

module.exports = {
	entry: [
		// 'react-hot-loader/patch',
		// './src/index.js'
		// 'react-hot-loader/patch',
		// 'webpack-dev-server/client?http://localhost:8080',
		// 'webpack/hot/only-dev-server',
		'./client/index.js'
	],
	output: {
		 // path: '/luk/JS_bootcamp/JSboot41/build',
		// path: path.resolve(__dirname,'build'),
		// filename: 'app.bundle.js'
		filename: './bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'public/index.html',
		filename: 'index.html',
		inject: 'body'
		}),
		new webpack.optimize.UglifyJsPlugin(),
		new OptimizeJsPlugin({
		sourceMap: false
	})]
};