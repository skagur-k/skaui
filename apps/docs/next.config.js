const skaui = ['@skaui/button']

const withTM = require('next-transpile-modules')(skaui)

module.exports = withTM({
	reactStrictMode: true,
})
