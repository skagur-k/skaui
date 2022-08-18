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
		key: '/component/checkbox',
		title: 'Checkbox',
	},

	{
		key: '/component/input',
		title: 'Input',
	},

	{
		key: '/component/radio',
		title: 'Radio',
	},
	{
		key: '/component/textarea',
		title: 'Text Area',
	},
]

const buttons: IComponents = [
	{
		key: '/component/button',
		title: 'Button',
	},
	{
		key: '/component/iconbutton',
		title: 'Icon Button',
	},
	{
		key: '/component/toggle',
		title: 'Toggle',
	},
]

const overlays: IComponents = [
	{
		key: '/component/menu',
		title: 'Menu',
	},
	{
		key: '/component/modal',
		title: 'Modal',
	},
	{
		key: '/component/toast',
		title: 'Toast',
	},
]

const pickers: IComponents = [
	{
		key: '/pickers/combobox',
		title: 'Combobox',
	},
	{
		key: '/pickers/select',
		title: 'Select',
	},
]

const status: IComponents = [
	{
		key: '/component/meter',
		title: 'Meter',
	},
	{
		key: '/component/progress',
		title: 'Progress',
	},
	{
		key: '/component/statusdot',
		title: 'Status Dot',
	},
]

const navigation: IComponents = []

const misc: IComponents = []

const sections: IComponents = [
	{
		key: '/sections/accordion',
		title: 'Accordion',
	},
	{
		key: '/sections/collapsible',
		title: 'Collapsible',
	},
	{
		key: '/sections/tabs',
		title: 'Tabs',
	},
]

const ui: IComponents = [
	{
		key: '/component/avatar',
		title: 'Avatar',
	},
	{
		key: '/component/description',
		title: 'Description',
	},
	{
		key: '/component/fileviewer',
		title: 'FileViewer',
	},
	{
		key: '/component/image',
		title: 'Image',
	},
	{
		key: '/component/kbd',
		title: 'KBD',
	},
	{
		key: '/component/note',
		title: 'Note',
	},
	{
		key: '/component/snippet',
		title: 'Snippet',
	},
	{
		key: '/component/tag',
		title: 'Tag',
	},
	{
		key: '/component/text',
		title: 'Text',
	},
]

const components: IAllComponents[] = [
	{
		heading: 'Buttons',
		components: buttons,
	},
	{
		heading: 'Forms',
		components: forms,
	},
	{
		heading: 'Pickers',
		components: pickers,
	},
	{
		heading: 'Sections',
		components: sections,
	},
	{
		heading: 'UI Components',
		components: ui,
	},
	{
		heading: 'Overlays',
		components: overlays,
	},
	{
		heading: 'Status',
		components: status,
	},
	{
		heading: 'Misc.',
		components: misc,
	},
]

export default components
