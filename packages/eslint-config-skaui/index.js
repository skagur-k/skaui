module.exports = {
	extends: ['next', 'prettier'],
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
	},
	ignorePatterns: ['node_modules', '.turbo', '.next', 'dist'],
}
