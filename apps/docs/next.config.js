const skaui = ['@skaui/core']

const withTM = require('next-transpile-modules')(skaui)

module.exports = withTM({
	// reactStrictMode: true,
	// swcMinify: true,
})
