/** @type {import('tailwindcss').Config} */
const skaui = require('@skaui/twplugin')

module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@skaui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [
		skaui({
			cssBase: true,
		}),
	],
}
