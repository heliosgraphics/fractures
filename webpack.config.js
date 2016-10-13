const webpack = require("webpack");

module.exports = {
	entry: "./app/main",
	output: {
		path: __dirname + "/dist/",
		publicPath: "/dist/",
		filename: "demo.bundle.js"
	},
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
	module: {
		loaders: [
			{ test: /\.ts/, loader: "awesome-typescript-loader" }
		]
	}
};
