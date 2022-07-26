export default function (plop) {
	/** @type {import('plop').NodePlopAPI} */
	// create your generators here

	plop.setGenerator('component', {
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
				templateFile: '.template/package.template.hbs',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/index.ts',
				templateFile: '.template/index.ts',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/tsconfig.json',
				templateFile: '.template/tsconfig.json',
			},
			{
				type: 'add',
				path: './packages/{{folderName name}}/src/index.ts',
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
