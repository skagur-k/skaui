module.exports = {
	root: true,
	// This tells ESLint to load the config from the package `eslint-config-skaui`
	extends: ['skaui'],
	settings: {
		next: {
			rootDir: ['apps/*/'],
		},
	},
}
