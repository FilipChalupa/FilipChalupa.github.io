/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./projects/**/*.html',
		'./transfer/**/*.html',
		'./identity/**/*.html',
		'./3d-stream/**/*.html',
		'./last.fm-now/**/*.html',
	],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'brand-green': '#06a004',
				'dark-bg': '#0e0e0e',
				// Banking colors for transfer page
				'bank-ceska': '#005e8f',
				'bank-csob': '#0099cc',
				'bank-moneta': '#2b1f69',
				'bank-revolut': '#0566eb',
				'bank-bitcoin': '#f79400',
				'bank-lightning': '#f8700d',
				'bank-tippin': '#04a600',
				'bank-paypal': '#0569b6',
				'bank-transferwise': '#37517e',
			},
			fontFamily: {
				sans: ['Arial', 'Helvetica', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
