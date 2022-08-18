import { Checkbox, KBD } from '@skaui/core'
import { NextPage } from 'next'
import { useState } from 'react'
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
<Checkbox.Group size='sm' label='Small'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
<Checkbox.Group size='md' label='Medium'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
<Checkbox.Group size='lg' label='Large'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
</Container>
`
const groupScope = { Checkbox, Container }

const grouporientationCode = `<Container>
<Checkbox.Group label='Row'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
<Checkbox.Group row label='Column'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
</Container>
`
const grouporientationScope = { Checkbox, Container }

const TogglePage: NextPage = () => {
	const [selected, setSelected] = useState([])
	const controlledScope = { Checkbox, Container, selected, setSelected }
	const controlledCode = `() => {
return (
<Container>
<Checkbox.Group value={selected} onChange={setSelected} label='Controlled'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
<Checkbox.Group defaultValue={['option2']} label='Uncontrolled'>
	<Checkbox.GroupItem value="option1">Option 1</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option2">Option 2</Checkbox.GroupItem>
	<Checkbox.GroupItem value="option3">Option 3</Checkbox.GroupItem>
</Checkbox.Group>
</Container>)
}
`

	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Checkbox</h1>
				<h3 className='text-base text-neutral-400'>
					Checkboxes can be focused with <KBD>Tab</KBD> and be checked and
					unchecked with <KBD>Space</KBD> key.
				</h3>

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

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Orientation</h2>
					<IDE code={grouporientationCode} scope={grouporientationScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled & Uncontrolled</h2>
					<IDE code={controlledCode} scope={controlledScope}>
						<p>
							Selected Options:{' '}
							<span className='font-semibold'>
								{selected.map((item) => item + ' ')}
							</span>
						</p>
					</IDE>
				</div>
			</div>
		</PageLayout>
	)
}

export default TogglePage
