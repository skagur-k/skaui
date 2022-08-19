import { InlineCode, Note, useToast } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const noteCode = `() => {
	return (
		<Container>
			<Note>A Note</Note>
		</Container>
	)
}
`
const noteScope = { Note, Container }

const labelCode = `() => {
	return (
		<Container>
			<Note label="Extra information">You can change the label with label prop.</Note>
		</Container>
	)
}
`
const labelScope = { Note, Container }

const sizesCode = `() => {
	return (
		<Container>
			<Note size="sm">Small Note</Note>
			<Note size="md">Medium Note</Note>
			<Note size="lg">Large Note</Note>
		</Container>
	)
}
`
const sizesScope = { Note, Container }

const typesCode = `() => {
	return (
		<Container align="start">
			<Note>Note</Note>
			<Note type="success">Note</Note>
			<Note type="error">Note</Note>
			<Note type="warning">Note</Note>
			<Note type="secondary">Note</Note>
		</Container>
	)
}
`
const typesScope = { Note, Container }

const filledCode = `() => {
	return (
		<Container align="start">
			<Note filled>Note</Note>
			<Note filled type="success">Note</Note>
			<Note filled type="error">Note</Note>
			<Note filled type="warning">Note</Note>
			<Note filled type="secondary">Note</Note>
		</Container>
	)
}
`
const filledScope = { Note, Container }

const contrastCode = `() => {
	return (
		<Container align="start">
			<Note contrast>Note</Note>
			<Note contrast type="success">Note</Note>
			<Note contrast type="error">Note</Note>
			<Note contrast type="warning">Note</Note>
			<Note contrast type="secondary">Note</Note>
		</Container>
	)
}
`
const contrastScope = { Note, Container }

const NotePage: NextPage = () => {
	const toast = useToast()
	const actionCode = `() => {

	function handlePress(){
		toast('Action button pressed!', {title: 'Action'})
	}

	return (
		<Container>
			<Note action={handlePress} actionLabel={'Notify'}>A Note</Note>
		</Container>
	)
}
`
	const actionScope = { Note, Container, toast }

	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Note</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Displays text that requires attention and provides extra information.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default</h2>
					<h3 className='text-lg text-neutral-400'>Default style notes.</h3>
					<IDE code={noteCode} scope={noteScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Note with Action</h2>
					<h3 className='text-lg text-neutral-400'>
						Action and its label can be set with <InlineCode>action</InlineCode>{' '}
						and <InlineCode>actionLabel</InlineCode> props.
					</h3>
					<IDE code={actionCode} scope={actionScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Label</h2>
					<h3 className='text-lg text-neutral-400'>
						Users can customize the label of the component with{' '}
						<InlineCode>label</InlineCode> prop.
					</h3>
					<IDE code={labelCode} scope={labelScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types</h2>
					<IDE code={typesCode} scope={typesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Filled</h2>
					<IDE code={filledCode} scope={filledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Contrast</h2>
					<IDE code={contrastCode} scope={contrastScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default NotePage
