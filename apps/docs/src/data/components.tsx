import { Badge } from '@skaui/core'
import React from 'react'

interface IComponent {
	key: string
	title: string
	badge?: React.ReactElement
}

type IComponents = Array<IComponent>

export interface IAllComponents {
	heading: string
	components: IComponents
}

const buttons: IComponents = [
	{
		key: '/buttons/button',
		title: 'Button',
	},
	{
		key: '/buttons/buttongroup',
		title: 'Button Group',
	},
	{
		key: '/buttons/iconbutton',
		title: 'Icon Button',
	},
	{
		key: '/buttons/toggle',
		title: 'Toggle',
	},
]

const forms: IComponents = [
	{
		key: '/forms/checkbox',
		title: 'Checkbox',
	},

	{
		key: '/forms/input',
		title: 'Input',
	},

	{
		key: '/forms/radio',
		title: 'Radio',
	},
	{
		key: '/forms/textarea',
		title: 'Text Area',
	},
]

const overlays: IComponents = [
	{
		key: '/overlays/drawer',
		title: 'Drawer',
		badge: <Badge>NEW</Badge>,
	},
	{
		key: '/overlays/modal',
		title: 'Modal',
	},
	{
		key: '/overlays/menu',
		title: 'Menu',
		badge: <Badge>TODO</Badge>,
	},
	{
		key: '/overlays/toast',
		title: 'Toast',
	},
	{
		key: '/overlays/tooltip',
		title: 'Tooltip',
		badge: <Badge>NEW</Badge>,
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
		key: '/status/meter',
		title: 'Meter',
	},
	{
		key: '/status/progress',
		title: 'Progress',
	},
	{
		key: '/status/statusdot',
		title: 'Status Dot',
	},
]

const styleguide: IComponents = [
	{
		key: '/styleguide/colors',
		title: 'Colors',
	},
	{
		key: '/component/text',
		title: 'Text',
	},
]

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
		key: '/component/fileviewer',
		title: 'File Viewer',
	},
	{
		key: '/component/imageviewer',
		title: 'Image Viewer',
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
		title: 'Tag & Badge',
	},
	{
		key: '/component/navigation',
		title: 'Navigation',
	},
]

const components: IAllComponents[] = [
	{
		heading: 'Style Guide',
		components: styleguide,
	},
	{
		heading: 'Buttons',
		components: buttons,
	},
	{
		heading: 'Forms',
		components: forms,
	},
	{
		heading: 'Overlays',
		components: overlays,
	},
	{
		heading: 'Pickers',
		components: pickers,
	},
	{
		heading: 'Status',
		components: status,
	},
	{
		heading: 'Sections',
		components: sections,
	},
	{
		heading: 'UI Components',
		components: ui,
	},
	// {
	// 	heading: 'Misc.',
	// 	components: misc,
	// },
]

export default components
