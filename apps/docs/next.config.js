const skaui = ['@skaui/button', '@skaui/collapsible', '@skaui/treeview']

const withTM = require('next-transpile-modules')(skaui)

module.exports = withTM({
	reactStrictMode: true,
	// swcMinify: true,
})
