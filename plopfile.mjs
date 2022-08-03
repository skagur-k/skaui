export default function (plop) {
	/** @type {import('plop').NodePlopAPI} */
	// create your generators here

	plop.setGenerator('Package - UI Component', {
		description:
			'This plop generates a new component folder with preconfigured tsconfig and package.json',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name for the package (i.e. button)',
			},
			{
				type: 'input',
				name: 'description',
				message: 'Description for the package.',
			},
		], // array of inquirer prompts
		actions: [
			{
				type: 'add',
				path: './packages/{{folderName name}}/package.json',
				templateFile: '.template/package/package.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/tsconfig.json',
				templateFile: '.template/package/tsconfig.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/.eslintrc.js',
				templateFile: '.template/package/eslintrc.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/tailwind.config.js',
				templateFile: '.template/package/tailwind.config.js',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/postcss.config.js',
				templateFile: '.template/package/postcss.config.js',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/src/global.d.ts',
				templateFile: '.template/package/src/global.d.ts',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/index.ts',
				templateFile: '.template/package/index.ts',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/src/{{pascalCase name}}.module.css',
				templateFile: '.template/package/src/css.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/src/{{pascalCase name}}.tsx',
				templateFile: '.template/package/src/component.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/src/index.ts',
				templateFile: '.template/package/src/index.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/rollup.config.js',
				templateFile: '.template/package/rollup.config.js',
			},
		], // array of actions
	})

	plop.setGenerator('SKA UI / CORE - Icon Component', {
		description: 'This plop generates a new icon component for @skaui/core.',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name of the Icon (i.e. Home)',
			},
		], // array of inquirer prompts
		actions: [
			{
				type: 'add',
				path: './packages/skaui-core/src/icons/{{iconName name}}.tsx',
				templateFile: '.template/icon.template.hbs',
			},
			{
				type: 'append',
				path: './packages/skaui-core/src/icons/index.ts',
				pattern: /(\/\/ -- APPEND EXPORTS HERE --)/gi,
				template:
					"export { default as {{iconName name}} } from './{{iconName name}}' ",
			},
		], // array of actions
	})

	plop.setGenerator('DOCS - Page Component', {
		description: 'This plop generates a new page component for Docs.',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name for the Page (i.e. Home)',
			},
		], // array of inquirer prompts
		actions: [
			{
				type: 'add',
				path: './apps/docs/src/pages/{{kebabCase name}}.tsx',
				templateFile: '.template/next/Page.template.hbs',
			},
		], // array of actions
	})

	plop.setGenerator('DOCS - UI Component', {
		description:
			'This plop generates a new component folder with template files.',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Name for the Component (i.e. Header)',
			},
		], // array of inquirer prompts
		actions: [
			{
				type: 'add',
				path: './apps/docs/src/components/{{lowerCase name}}/{{pascalCase name}}.module.css',
				templateFile: '.template/component/css.template.hbs',
			},
			{
				type: 'add',
				path: './apps/docs/src/components/{{lowerCase name}}/{{pascalCase name}}.tsx',
				templateFile: '.template/component/component.template.hbs',
			},
			{
				type: 'add',
				path: './apps/docs/src/components/{{lowerCase name}}/index.ts',
				templateFile: '.template/component/index.template.hbs',
			},
		], // array of actions
	})

	plop.setHelper('packageName', (str) => {
		return '@skaui/'.concat(str.toLowerCase())
	})

	plop.setHelper('folderName', (str) => {
		return 'skaui-'.concat(str.toLowerCase())
	})

	plop.setHelper('iconName', (str) => {
		return str.concat('Icon')
	})
}
