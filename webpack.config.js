module.exports = {
	entry: "./src/js/app.js",

	// Output. Loaded into html files
	output: {
		filename: "bundle.js"
	},

	// Automatically compiles when files change
	watch: true,

	// Automatically reloads the page when compilation is done
	devServer: {
		inline: true
	},

	module: {
		loaders: [
			{
				test: /\.(svg|gif|png|eot|woff|woff2|ttf)$/,
				loaders: [
					"url-loader"
				]
			},
			{
				test: /\.scss$/,
				loaders: [
					"style-loader", 
					"css-loader",
					"sass-loader"]
			}
		]
	}
}
