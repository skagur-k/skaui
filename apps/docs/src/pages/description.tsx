import { Item, Section, Select } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Description: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex w-full flex-col justify-center gap-4 p-10'>
				<Select placeholder='Choose One!' aria-label='Favorite Animal'>
					<Item>Hello</Item>
					<Section title='Category 2'>
						<Item>Amie</Item>
						<Item>Volcano</Item>
						<Item>Elephant</Item>
					</Section>
				</Select>
			</div>
		</PageLayout>
	)
}

export default Description
