import { Accordion } from '@skaui/core'
import { NextPage } from 'next'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const AccordionPage: NextPage = () => {
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
	const code = `<Accordion defaultExpanded={1} items={items}/>`
	const scope = { Accordion, items }

	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-2xl font-bold'>Accordion</h1>
				<IDE code={code} scope={scope} />
			</div>
		</PageLayout>
	)
}

export default AccordionPage
