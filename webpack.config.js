const DotEnvPlugin = require('webpack-dotenv-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')

const PATHS = {
  env: path.join(__dirname, (process.env.HEROKU && './.env.heroku') || (process.env.NODE_ENV && `./.env.${process.env.NODE_ENV}`) || './.env'),
  js: path.join(__dirname, 'src/index.js'),
  css: path.join(__dirname, 'src/assets/stylesheets/main.scss')
}

const rules = [{
	test: /\.js$/,
	exclude: /node_modules/,
	use: [ 'babel-loader' ]
},
{
  test: /\.scss/,
  loader: ExtractTextPlugin.extract({
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
    fallback: 'style-loader'
  }),
}]

module.exports = {
	entry: [
		'react-hot-loader/patch',
		PATHS.css,
		PATHS.js,
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: { rules },
	plugins: [
	new DotEnvPlugin({
		sample: './.env.example',	
		path: PATHS.env
	}),
	new ExtractTextPlugin('stylesheets/main.css'),
	new HtmlWebpackPlugin({ template: 'index.html' }),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NamedModulesPlugin(),
	new WebpackNotifierPlugin(),
	],
	devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    hotOnly: true,
    historyApiFallback: true,
    open: true,
    noInfo: true,
    stats: 'errors-only'
  }
}