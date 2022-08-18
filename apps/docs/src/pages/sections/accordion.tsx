import { Accordion, InlineCode } from '@skaui/core'
import { NextPage } from 'next'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const items = [
	{
		title: 'Question 1',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
	},
	{
		title: 'Question 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
	},
	{
		title: 'Question 3',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
	},
	{
		title: 'Question 4',
		key: 'hello',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
	},
]

const defaultCode = `() => {

	const items = [
		{
			title: 'Question 1',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
		{
			title: 'Question 2',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
		{
			title: 'Question 3',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
		{
			title: 'Question 4',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse! Hic, saepe aperiam cum iste optio eum beatae.',
		},
	]

	return (
		<Accordion items={items}/>
	)
}`
const defaultScope = { Accordion }

const expandedCode = `<Accordion defaultExpanded={2} items={items}/>`
const expandedScope = { Accordion, items }

const AccordionPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Accordion</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Collection of collapsibles.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default State</h2>
					<h3 className='text-lg text-neutral-400'>
						All collapsibles are collapsed at default state.
					</h3>
					<IDE code={defaultCode} scope={defaultScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default Expanded</h2>
					<h3 className='text-lg text-neutral-400'>
						Collapsible to expand by default can by providing the index of the
						item to <InlineCode>defaultExpanded</InlineCode> prop.
					</h3>
					<IDE code={expandedCode} scope={expandedScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default AccordionPage
