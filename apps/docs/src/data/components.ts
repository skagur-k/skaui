interface IComponent {
	key: string
	title: string
}

type IComponents = Array<IComponent>

export interface IAllComponents {
	heading: string
	components: IComponents
}

const forms: IComponents = [
	{
		key: 'button',
		title: 'Button',
	},
	{
		key: 'input',
		title: 'Input',
	},
	{
		key: 'select',
		title: 'Select',
	},
	{
		key: 'radio',
		title: 'Radio',
	},
]

const ui: IComponents = [
	{
		key: 'avatar',
		title: 'Avatar',
	},
	{
		key: 'accordion',
		title: 'Accordion',
	},
	{
		key: 'collapsible',
		title: 'Collapsible',
	},
	{
		key: 'treeview',
		title: 'Treeview',
	},
	{
		key: 'toasat',
		title: 'Toast',
	},
	{
		key: 'note',
		title: 'Note',
	},
]

const components: IAllComponents[] = [
	{
		heading: 'Forms',
		components: forms,
	},
	{
		heading: 'Components',
		components: ui,
	},
]

export default components
