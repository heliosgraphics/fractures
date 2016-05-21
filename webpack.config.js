const webpack = require("webpack");

module.exports = {
	entry: "./app/main",
	output: {
		path: __dirname + "/app",
		publicPath: "app/",
		filename: "main.js"
	},
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
	module: {
		loaders: [
			{ test: /\.ts/, loaders: ["ts-loader"], exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: { warnings: false },
			mangle: false
		})
	]
};
