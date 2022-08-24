import { KBD, TextArea, Text } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const textareaCode = `<Container>
<TextArea/>
</Container>
`
const textareaScope = { TextArea, Container }

const placeholderCode = `<Container>
<TextArea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
</Container>
`
const placeholderScope = { TextArea, Container }

const labelCode = `<Container>
<TextArea label="Textarea with label"/>
</Container>
`
const labelScope = { TextArea, Container }

const defaultCode = `<Container>
<TextArea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
</Container>
`
const defaultScope = { TextArea, Container }

const disabledCode = `<Container>
<TextArea isDisabled placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
</Container>
`
const disabledScope = { TextArea, Container }

const TextAreaPage: NextPage = () => {
	const controlledScope = { TextArea, Text, Container }
	const controlledCode = `() => {

	const [text, setText] = React.useState('')

	return (
		<Container col align="center">
			<TextArea value={text} onChange={setText}/>
			<Text>{text}</Text>
		</Container>
	)
}
`

	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Text Area</h1>
				<h3 className='text-xl font-medium text-neutral-400'>Text Area</h3>
				<h3 className='text-base text-neutral-400'>
					Text Areas can be focused with <KBD>Tab</KBD>
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Text Area</h2>
					<IDE code={textareaCode} scope={textareaScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Label</h2>
					<IDE code={labelCode} scope={labelScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Placeholder</h2>
					<h3 className='text-lg text-neutral-400'>
						Text Area with placeholder
					</h3>
					<IDE code={placeholderCode} scope={placeholderScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default Value</h2>
					<h3 className='text-lg text-neutral-400'>
						Text Area with default value
					</h3>
					<IDE code={defaultCode} scope={defaultScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled</h2>
					<h3 className='text-lg text-neutral-400'>Disabled Text Area</h3>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled Text Area</h2>
					<h3 className='text-lg text-neutral-400'>Controlled</h3>
					<IDE code={controlledCode} scope={controlledScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TextAreaPage
