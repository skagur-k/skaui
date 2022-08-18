import { ComboBox, InlineCode, KBD } from '@skaui/core'
import { NextPage } from 'next'
import Link from 'next/link'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const comboboxCode = `<Container>
	<ComboBox label="Uncontrolled ComboBox" defaultInputValue='Option'>
		<ComboBox.Item key='option1'>Option 1</ComboBox.Item>
		<ComboBox.Item key='option2'>Option 2</ComboBox.Item>
		<ComboBox.Item key='option3'>Option 3</ComboBox.Item>
		<ComboBox.Item key='option4'>Option 4</ComboBox.Item>
	</ComboBox>
</Container>
`
const comboboxScope = { ComboBox, Container }

const controlledCode = `() => {
const [option, setOption] = React.useState('')

return (
<Container col>
	<ComboBox label="Options" onSelectionChange={setOption}>
		<ComboBox.Item key="option1">Option 1</ComboBox.Item>
		<ComboBox.Item key="option2">Option 2</ComboBox.Item>
		<ComboBox.Item key="option3">Option 3</ComboBox.Item>
		<ComboBox.Item key="option4">Option 4</ComboBox.Item>
	</ComboBox>
<div>Selected Option Key: <span>{option}</span></div>
</Container>)}
`
const controlledScope = { ComboBox, Container }

const dynamicCode = `() => {
const [transportation, setTransportation] = React.useState('')

const options = [
	{id: 1, name: 'Car'},
	{id: 2, name: 'Bus'},
	{id: 3, name: 'Subway'},
	{id: 4, name: 'Airplane'}
]

return (
<Container col>
	<ComboBox label="Transportation" defaultItems={options} onSelectionChange={setTransportation}>
		{(item) => <ComboBox.Item>{item.name}</ComboBox.Item>}
	</ComboBox>
	<div>Selected Transportation ID: <span>{transportation}</span></div>
</Container>)}
`
const dynamicScope = { ComboBox, Container }

const disabledCode = `
<Container col>
	<ComboBox isDisabled label="Disabled ComboBox">
		<ComboBox.Item isDisabled key="option1">Option 1</ComboBox.Item>
		<ComboBox.Item key="option2">Option 2</ComboBox.Item>
		<ComboBox.Item key="option3">Option 3</ComboBox.Item>
		<ComboBox.Item key="option4">Option 4</ComboBox.Item>
	</ComboBox>
	
	<ComboBox label="Disabled Option" disabledKeys={['option1']}>
		<ComboBox.Item isDisabled key="option1">Option 1</ComboBox.Item>
		<ComboBox.Item key="option2">Option 2</ComboBox.Item>
		<ComboBox.Item key="option3">Option 3</ComboBox.Item>
		<ComboBox.Item key="option4">Option 4</ComboBox.Item>
	</ComboBox>
</Container>
`
const disabledScope = { ComboBox, Container }

const sectionCode = `
<Container col>
	<ComboBox label="ComboBox with Categories">
		<ComboBox.Section title="Category 1">
			<ComboBox.Item key="option1">Option 1</ComboBox.Item>
			<ComboBox.Item key="option2">Option 2</ComboBox.Item>
		</ComboBox.Section>
		<ComboBox.Section title="Category 2">
			<ComboBox.Item key="option3">Option 3</ComboBox.Item>
			<ComboBox.Item key="option4">Option 4</ComboBox.Item>
		</ComboBox.Section>
	</ComboBox>
</Container>
`
const sectionScope = { ComboBox, Container }

const ComboBoxPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>ComboBox</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Drop-down listbox that provides an input for a selection of options.
				</h3>
				<h3 className='text-base text-neutral-400'>
					ComboBoxes can be focused with <KBD>Tab</KBD> and their options can be
					traversed with <KBD>Arrow</KBD> keys. Options can be selected with{' '}
					<KBD>Enter</KBD>.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Options are automatically filtered with respect to the value provided
					in the input field.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Uncontrolled</h2>
					<h3 className='text-lg text-neutral-400'>
						The input value, selected option and open state are entirely
						uncontrolled. The default value of the combobox is provided by{' '}
						<InlineCode>defaultInputValue</InlineCode>.
					</h3>
					<IDE code={comboboxCode} scope={comboboxScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled</h2>
					<h3 className='text-lg text-neutral-400'>
						State of the combobox is controlled.
					</h3>
					<IDE code={controlledCode} scope={controlledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Dynamic Options</h2>
					<h3 className='text-lg text-neutral-400'>
						ComboBox inherits{' '}
						<Link href='https://react-spectrum.adobe.com/react-stately/collections.html'>
							React Aria&apos;s Collection Components API.
						</Link>{' '}
						It accepts both static and dynamic collections. The following
						example shows combobox with dynamic collections.
					</h3>
					<IDE code={dynamicCode} scope={dynamicScope} />
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
						Options or ComboBox itself can be disabled.
					</h3>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ComboBoxPage
