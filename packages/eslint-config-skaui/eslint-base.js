module.exports = {
	extends: ['next', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
	},
	ignorePatterns: [
		'**/*.json',
		'node_modules',
		'.turbo',
		'.next',
		'**/dist',
		'coverage',
		'public',
	],
}
