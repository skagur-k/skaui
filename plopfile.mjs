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
				path: './packages/{{folderName name}}/index.ts',
				templateFile: '.template/package/index.template.hbs',
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
}
