import { ComboBox, Item, Section, Select } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Description: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex w-full flex-col justify-center gap-4 p-10'>
				<ComboBox placeholder='Placeholder' label='Combobox'>
					<Item key='option1'>Hello</Item>
					<Section title='Category 2'>
						<Item key='option2'>Option 2</Item>
					</Section>
				</ComboBox>
				<Select
					disabledKeys={['option1']}
					placeholder='Choose One!'
					label='Favorite Animal'
				>
					<Item key='option1'>Hello @</Item>
					<Section title='Category 2'>
						<Item key='option2'>Hello World!</Item>
					</Section>
				</Select>
			</div>
		</PageLayout>
	)
}

export default Description
