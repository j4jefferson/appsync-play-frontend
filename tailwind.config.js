const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.vue',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
			},
			colors: {
				blue: '#1DA1F2',
				darkblue: '#2795D9',
				lightblue: '#EFF9FF',
				dark: '#657786',
				light: '#AAB8C2',
				lighter: '#E1E8ED',
				lightest: '#F5F8FA',
			},
		},
	},
	plugins: [],
}
