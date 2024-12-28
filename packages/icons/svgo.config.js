module.exports = {
	multipass: true,
	plugins: [
		"preset-default",
		"removeViewBox",
		"removeDimensions",
		{
			name: "removeAttrs",
			params: {
				attrs: "(width|height|style|color|fill)",
			},
		},
	],
}
