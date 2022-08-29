import { KBD, Radio, useToast } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<Radio.Group size='sm' label='Small'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
	<Radio.Group size='md' label='Medium'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
	<Radio.Group size='lg' label='Large'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
</Container>
`
const sizesScope = { Radio, Container }

const disabledCode = `<Container>
	<Radio.Group isDisabled label='Group Disabled'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
	<Radio.Group label='Individual Option Disabled'>
		<Radio isDisabled value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
</Container>
`
const disabledScope = { Radio, Container }

const defaultCode = `<Container>
	<Radio.Group defaultValue={'option3'} label='Option 3 Selected'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
</Container>
`
const defaultScope = { Radio, Container }

const orientationCode = `<Container>
	<Radio.Group label='Column'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
	<Radio.Group row label='Row'>
		<Radio value='option1'>Option 1</Radio>
		<Radio value='option2'>Option 2</Radio>
		<Radio value='option3'>Option 3</Radio>
		<Radio value='option4'>Option 4</Radio>
	</Radio.Group>
</Container>
`
const orientationScope = { Radio, Container }

const RadioPage: NextPage = () => {
	const toast = useToast()
	const controlledCode = `() => {
const [selected, setSelected] = React.useState('')

function handleChange(value){
	setSelected(value)
	toast.success(value)
}

return (
	<Container>
		<Radio.Group value={selected} onChange={(value) => handleChange(value)} label='Controlled'>
			<Radio value='option1'>Option 1</Radio>
			<Radio value='option2'>Option 2</Radio>
			<Radio value='option3'>Option 3</Radio>
			<Radio value='option4'>Option 4</Radio>
		</Radio.Group>
		<Radio.Group label='Uncontrolled'>
			<Radio value='option1'>Option 1</Radio>
			<Radio value='option2'>Option 2</Radio>
			<Radio value='option3'>Option 3</Radio>
			<Radio value='option4'>Option 4</Radio>
		</Radio.Group>
	</Container>
)}
`
	const controlledScope = { Radio, Container, toast }

	return (
		<PageLayout title='Radio'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Radio</h1>
				<h3 className='text-xl font-medium text-neutral-400'>TODO</h3>
				<h3 className='text-base text-neutral-400'>
					Radio Groups can be focused with <KBD>Tab</KBD> and be interacted with
					<KBD>Arrow</KBD> keys.
				</h3>
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Radios with various sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled</h2>
					<h3 className='text-lg text-neutral-400'>
						Radios with different types.
					</h3>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Orientation</h2>
					<h3 className='text-lg text-neutral-400'>Row & Column</h3>
					<IDE code={orientationCode} scope={orientationScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled & Uncontrolled</h2>
					<h3 className='text-lg text-neutral-400'>
						Default value of the Radio Group
					</h3>
					<IDE code={controlledCode} scope={controlledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default Value</h2>
					<h3 className='text-lg text-neutral-400'>Controlled State</h3>
					<IDE code={defaultCode} scope={defaultScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default RadioPage
