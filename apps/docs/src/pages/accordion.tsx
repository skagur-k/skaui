import { Collapsible } from '@skaui/core'
import Accordian from '@skaui/core/src/components/accordion/Accordion'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Accordion: NextPage = () => {
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
		<PageLayout>
			<div className='flex flex-col gap-5'>
				<Accordian defaultExpanded={2} items={items} />
				<Collapsible title='Collapsible'>Hello World!</Collapsible>
			</div>
		</PageLayout>
	)
}

export default Accordion
