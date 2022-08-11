import {
	Checkbox,
	CheckboxGroup,
	ComboBox,
	Item,
	Radio,
	RadioGroup,
	Section,
	Select,
} from '@skaui/core'
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
				<RadioGroup>
					<Radio value='dogs'>Dogs</Radio>
					<Radio value='cats'>Cats</Radio>
					<Radio value='ducks'>Ducks</Radio>
					<Radio value='chicken'>Chickens</Radio>
				</RadioGroup>
				<RadioGroup label='Choose your animal'>
					<Radio isDisabled value='dogs'>
						Dogs
					</Radio>
					<Radio value='cats'>Cats</Radio>
					<Radio value='ducks'>Ducks</Radio>
					<Radio value='chicken'>Chickens</Radio>
					<Radio value='rabbit'>Rabbit</Radio>
					<Radio value='horse'>Horse</Radio>
					<Radio value='turtle'>Turtle</Radio>
				</RadioGroup>
				<CheckboxGroup value={['one']} label='Hello World!'>
					<Checkbox value='one'>1</Checkbox>
					<Checkbox value='two'>2</Checkbox>
					<Checkbox defaultSelected value='three'>
						3
					</Checkbox>
				</CheckboxGroup>
			</div>
		</PageLayout>
	)
}

export default Description
