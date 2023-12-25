/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			primary: {
				light: '#fff',
				DEFAULT: '#2b3945',
				dark: '#2b3945',
			},
			secondary: {
				light: '#fafafa',
				DEFAULT: '#202c37',
				dark: '#202c37',
			},
			main: {
				light: '#000',
				DEFAULT: '#fff',
				dark: '#fff'
			},
			card: {
				DEFAULT: '#2b3945',
			},
			gray: colors.gray,
			blue: colors.blue,
		},
		extend: {},
	},
	plugins: [],
	darkMode: 'class',
};
