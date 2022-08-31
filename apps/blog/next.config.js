const skaui = ['@skaui/core']

const withTM = require('next-transpile-modules')(skaui)

module.exports = withTM({
	reactStrictMode: false,
	images: {
		domains: ['avatars.githubusercontent.com'],
	},
	// swcMinify: true,
})
