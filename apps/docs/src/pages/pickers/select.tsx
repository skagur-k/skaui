import { InlineCode, KBD, Select } from '@skaui/core'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const placeholderCode = `<Container>
	<Select label="Select Component with placeholder" placeholder="This is where the placeholder goes">
		<Select.Item key='option1'>Option 1</Select.Item>
		<Select.Item key='option2'>Option 2</Select.Item>
		<Select.Item key='option3'>Option 3</Select.Item>
		<Select.Item key='option4'>Option 4</Select.Item>
	</Select>
</Container>
`
const placeholderScope = { Select, Container }

const selectCode = `<Container>
	<Select label="Uncontrolled Select" defaultInputValue='Option'>
		<Select.Item key='option1'>Option 1</Select.Item>
		<Select.Item key='option2'>Option 2</Select.Item>
		<Select.Item key='option3'>Option 3</Select.Item>
		<Select.Item key='option4'>Option 4</Select.Item>
	</Select>
</Container>
`
const selectScope = { Select, Container }

const disabledCode = `
<Container col>
	<Select isDisabled label="Disabled Select">
		<Select.Item isDisabled key="option1">Option 1</Select.Item>
		<Select.Item key="option2">Option 2</Select.Item>
		<Select.Item key="option3">Option 3</Select.Item>
		<Select.Item key="option4">Option 4</Select.Item>
	</Select>
	
	<Select label="Disabled Option" disabledKeys={['option1']}>
		<Select.Item isDisabled key="option1">Option 1</Select.Item>
		<Select.Item key="option2">Option 2</Select.Item>
		<Select.Item key="option3">Option 3</Select.Item>
		<Select.Item key="option4">Option 4</Select.Item>
	</Select>
</Container>
`
const disabledScope = { Select, Container }

const sectionCode = `
<Container col>
	<Select label="Select with Categories">
		<Select.Section title="Category 1">
			<Select.Item key="option1">Option 1</Select.Item>
			<Select.Item key="option2">Option 2</Select.Item>
		</Select.Section>
		<Select.Section title="Category 2">
			<Select.Item key="option3">Option 3</Select.Item>
			<Select.Item key="option4">Option 4</Select.Item>
		</Select.Section>
	</Select>
</Container>
`
const sectionScope = { Select, Container }

const SelectPage: NextPage = () => {
	const [option, setOption] = useState('')
	const [transportation, setTransportation] = useState('Car')
	const controlledScope = { Select, Container, option, setOption }
	const controlledCode = `
<Container col>
	<Select label="Options" selectedKey={option} onSelectionChange={setOption}>
		<Select.Item key="option1">Option 1</Select.Item>
		<Select.Item key="option2">Option 2</Select.Item>
		<Select.Item key="option3">Option 3</Select.Item>
		<Select.Item key="option4">Option 4</Select.Item>
	</Select>
</Container>
	`

	const dynamicCode = `() => {

const options = [
	{name: 'Car'},
	{name: 'Bus'},
	{name: 'Subway'},
	{name: 'Airplane'}
]

return (
<Container col>
	<Select label="Transportation" items={options} selectedKey={transportation} onSelectionChange={setTransportation}>
		{(item) => <Select.Item key={item.name}>{item.name}</Select.Item>}
	</Select>
</Container>)}
`
	const dynamicScope = { Select, Container, transportation, setTransportation }

	return (
		<PageLayout title='Select'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Select</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Drop-down listbox that provides a selection of options.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Selectes can be focused with <KBD>Tab</KBD> and their options can be
					traversed with <KBD>Arrow</KBD> keys. Options can be selected with{' '}
					<KBD>Enter</KBD>.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Options are automatically filtered with respect to the value provided
					in the input field.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Placeholder</h2>
					<h3 className='text-lg text-neutral-400'>
						Placeholder of Select can be set with{' '}
						<InlineCode>placeholder</InlineCode> prop.
					</h3>
					<IDE code={placeholderCode} scope={placeholderScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Uncontrolled</h2>
					<h3 className='text-lg text-neutral-400'>
						The input value, selected option and open state are entirely
						uncontrolled. The default value of the Select is provided by{' '}
						<InlineCode>defaultInputValue</InlineCode>.
					</h3>
					<IDE code={selectCode} scope={selectScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled</h2>
					<h3 className='text-lg text-neutral-400'>
						State of Select is controlled.
					</h3>
					<IDE code={controlledCode} scope={controlledScope}>
						<p>
							Selected Option: <span className='font-bold'>{option}</span>
						</p>
					</IDE>
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Dynamic Options</h2>
					<h3 className='text-lg text-neutral-400'>
						Select inherits{' '}
						<Link href='https://react-spectrum.adobe.com/react-stately/collections.html'>
							React Aria&apos;s Collection Components API.
						</Link>{' '}
						It accepts both static and dynamic collections. The following
						example shows combobox with dynamic collections.
					</h3>
					<IDE code={dynamicCode} scope={dynamicScope}>
						<p>
							Selected Transportation:{' '}
							<span className='font-bold'>{transportation}</span>
						</p>
					</IDE>
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sections</h2>
					<h3 className='text-lg text-neutral-400'>
						Options can be categorized into sections.
					</h3>
					<IDE code={sectionCode} scope={sectionScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled</h2>
					<h3 className='text-lg text-neutral-400'>
						Select or individual options can be disabled.
					</h3>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default SelectPage
