const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');
const criticalSplit = require('postcss-critical-split');

const path = require('path');

const resourceFolder = 'src/main/resources/assets/';
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const appName = 'solliesweb';

const config = {
	mode: isProduction ? 'production' : 'development',
	entry: {
		main: ['babel-polyfill', './src/site/js/main.js'],
		react: './src/site/react/index.js'
	},
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js',
		path: `${__dirname}/${resourceFolder}`,
		publicPath: `/_/asset/${appName}:[hash]/`
	},
	resolve: {
		alias: {
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|es6|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?name=js/[name].[ext]',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader?sourceMap',
					'postcss-loader?sourceMap',
					'resolve-url-loader?sourceMap',
					'sass-loader?sourceMap'
				]
			},
			{
				test: /\.(eot|ttf|woff|woff2)$/,
				use: [{
					loader: 'file-loader?name=fonts/[name].[ext]&publicPath=../'
				}]
			},
			{
				test: /\.(svg|gif|png|jpg)$/,
				use: [{
					loader: 'file-loader?name=images/[name].[ext]&publicPath=../'
				}]
			}

		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].chunk.css'
		}),
		new CopyWebpackPlugin([
			{
				from: 'src/site/images',
				to: 'images'
			}
		]),
		new StyleLintPlugin(),
		new PostCssPipelineWebpackPlugin({
			predicate: name => /main.css$/.test(name),
			suffix: 'critical',
			pipeline: [
				criticalSplit({
					output: criticalSplit.output_types.CRITICAL_CSS
				}),
				cssnano({
					preset: 'default'
				})
			]
		}),
		new PostCssPipelineWebpackPlugin({
			predicate: name => /main.css$/.test(name),
			suffix: 'rest',
			pipeline: [
				criticalSplit({
					output: criticalSplit.output_types.REST_CSS
				}),
				cssnano({
					preset: 'default'
				})
			]
		})
	],
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			})
		]
	}
};

module.exports = config;
