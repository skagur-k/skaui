import { Button, InlineCode, Input, KBD, Text } from '@skaui/core'
import { ChevronRightIcon, SettingsIcon } from '@skaui/core/src/icons'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<Input size='sm' label='Small'/>
	<Input size='md' label='Medium'/>
	<Input size='lg' label='Large'/>
</Container>
`
const sizesScope = { Input, Container }

const prefixsuffixCode = `
<Container col align="center">
	<Input prefix="https://" label='Prefix' width="300px"/>
	<Input suffix=".com" label='Suffix' width="300px"/>
	<Input prefix="https://" suffix=".com" label='Prefix & Suffix' width="300px"/>
</Container>
`
const prefixsuffixScope = { Input, Container, ChevronRightIcon }

const descriptionCode = `
<Container col align="center">
	<Input label='Input with Description' description="This is where the description goes." width="300px"/>
	<Input validationState="invalid" label='Input with Error message' errorMessage="This is where the error message goes" width="300px"/>
</Container>
`
const descriptionScope = { Input, Container }

const placeholderCode = `
<Container col align="center">
	<Input label='Input with placeholder' placeholder="Please type in your name." width="300px"/>
	<Input label='Input with default value' defaultValue="Default Value" width="300px"/>
	<Input label='ReadOnly' defaultValue="Default Value" isReadOnly width="300px"/>
</Container>
`
const placeholderScope = { Input, Container }

const disabledCode = `
<Container col align="center">
	<Input isDisabled label='Disabled Input' width="300px"/>
	<Input isDisabled prefix="https://" suffix=".com" label='Disabled Input with Prefix & Suffix' width="300px"/>
	<Input isDisabled prefix="https://" label='Disabled Input with Prefix' width="300px"/>
	<Input isDisabled suffix=".com" label='Disabled Input with Suffix' width="300px"/>
	<Input isDisabled prefix="https://" suffix=".com" label='Disabled Input with Prefix & Suffix (unstyled)' unstyled width="300px"/>
</Container>
`
const disabledScope = { Input, Container }

const controlledCode = `() => {
	const [value, setValue] = React.useState('')
	return (
		<Container col align="center">
			<Input 
				value={value} 
				onChange={setValue} 
				label='Controlled Input' 
				description={${`'Mirrored Value: ' + ${`value`}`}} 
				width="300px"/>
		</Container>
		)
}
`
const controlledScope = { Input, Text, Container }

const unstyledCode = `
<Container col align="center">
	<Input prefix="https://" label='Unstyled Input w/ prefix' unstyled width="300px"/>
	<Input suffix=".com" label='Unstyled Input w/ suffix' unstyled width="300px"/>
	<Input prefix="https://" suffix=".com" label='Unstyled Input w/ prefix & suffix' unstyled width="300px"/>
</Container>
`
const unstyledScope = { Input, Container, SettingsIcon }

const TogglePage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Input</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Form Element with label and input.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Size of input can be set with <InlineCode>size</InlineCode> prop.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Prefix & Suffix</h2>
					<h3 className='text-lg text-neutral-400'>
						Prefix and Suffix can be set with <InlineCode>Prefix</InlineCode> &{' '}
						<InlineCode>Suffix</InlineCode> props.
					</h3>
					<IDE code={prefixsuffixCode} scope={prefixsuffixScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled Value</h2>
					<h3 className='text-lg text-neutral-400'>
						Prefix and Suffix can be set with <InlineCode>Prefix</InlineCode> &{' '}
						<InlineCode>Suffix</InlineCode> props.
					</h3>
					<IDE code={controlledCode} scope={controlledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>
						Placeholder, Default Value & ReadOnly
					</h2>
					<h3 className='text-lg text-neutral-400'>
						Placeholder and default value can be set with{' '}
						<InlineCode>placeholder</InlineCode> and{' '}
						<InlineCode>defaultValue</InlineCode>
						props.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						Readonly can be set by passing in{' '}
						<InlineCode>isReadOnly</InlineCode> prop.
					</h3>

					<IDE code={placeholderCode} scope={placeholderScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Description & Error messages</h2>
					<h3 className='text-lg text-neutral-400'>
						Description & Error messages can be set with{' '}
						<InlineCode>description</InlineCode> &{' '}
						<InlineCode>errorMessage</InlineCode> props.
					</h3>
					<IDE code={descriptionCode} scope={descriptionScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled</h2>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Unstyled</h2>
					<IDE code={unstyledCode} scope={unstyledScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TogglePage
