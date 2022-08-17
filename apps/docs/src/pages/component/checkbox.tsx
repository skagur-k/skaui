import { Checkbox, CheckboxGroup, KBD, Toggle } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<Checkbox size='sm'>Small</Checkbox>
	<Checkbox size='md'>Medium</Checkbox>
	<Checkbox size='lg'>Large</Checkbox>
</Container>
`
const sizesScope = { Checkbox, Container }

const disabledCode = `<Container>
	<Checkbox isDisabled size='sm'>Small</Checkbox>
	<Checkbox isDisabled size='md'>Medium</Checkbox>
	<Checkbox isDisabled size='lg'>Large</Checkbox>
</Container>
`
const disabledScope = { Checkbox, Container }

const groupCode = `<Container>
<CheckboxGroup size='sm' label='Checkbox Group'>
	<Checkbox>Option 1</Checkbox>
	<Checkbox>Option 2</Checkbox>
	<Checkbox>Option 3</Checkbox>
</CheckboxGroup>
<CheckboxGroup size='md' label='Checkbox Group'>
	<Checkbox>Option 1</Checkbox>
	<Checkbox>Option 2</Checkbox>
	<Checkbox>Option 3</Checkbox>
</CheckboxGroup>
<CheckboxGroup size='lg' label='Checkbox Group'>
	<Checkbox>Option 1</Checkbox>
	<Checkbox>Option 2</Checkbox>
	<Checkbox>Option 3</Checkbox>
</CheckboxGroup>
</Container>
`
const groupScope = { Checkbox, Container, CheckboxGroup }

const TogglePage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Checkbox</h1>
				<h3 className='text-base text-neutral-400'>
					Checkboxes can be focused with <KBD>Tab</KBD> and be checked and
					unchecked with <KBD>Space</KBD> key.
				</h3>
				<CheckboxGroup defaultValue={['opp']} label='Checkbox Group'>
					<Checkbox value={'opp'}>Small</Checkbox>
					<Checkbox value={'option2small'}>Medium</Checkbox>
					<Checkbox value={'option3small'}>Large</Checkbox>
				</CheckboxGroup>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Checkboxes with various sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled</h2>
					<h3 className='text-lg text-neutral-400'>
						Disabled checkboxes cannot be focused or checked.
					</h3>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Checkbox Group</h2>
					<h3 className='text-lg text-neutral-400'>
						Group of Checkboxes. Focus is scoped within the group. Checkboxes
						can be focused with <KBD>Tab</KBD> key
					</h3>
					<IDE code={groupCode} scope={groupScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TogglePage
