module.exports = {
	watch: true,
	entry: './app.js',
	output: {
		filename: 'dist.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}