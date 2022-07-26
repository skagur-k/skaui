module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'./eslint-base',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:mdx/recommended',
	],
	plugins: ['@typescript-eslint', 'import'],
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
			},
		},
	},
	rules: {
		// react
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function',
			},
		],

		// next
		'@next/next/no-html-link-for-pages': 'off',
		'import/no-named-as-default': 0,
	},
}
