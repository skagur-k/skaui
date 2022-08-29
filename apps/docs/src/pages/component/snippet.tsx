import { InlineCode, Snippet } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const snippetCode = `() => {

	const code = [
		'npm init',
		'npm install',
		'npm start'
	]

	return (
		<Container>
			<Snippet
			text={code}
			/>
		</Container>
	)
}
`
const snippetScope = { Snippet, Container }

const promptCode = `() => {

	const code = [
		'npm init',
		'npm install',
		'npm start'
	]

	return (
		<Container col align="center">
			<Snippet
			text={code}
			/>
			<Snippet
			text={code}
			prompt={false}
			/>
		</Container>
	)
}
`
const promptScope = { Snippet, Container }

const darkCode = `() => {

	const code = [
		'npm init',
		'npm install',
		'npm start'
	]

	return (
		<Container col align="center">
			<Snippet
			text={code}
			invert
			/>
		</Container>
	)
}
`
const darkScope = { Snippet, Container }

const SnippetPage: NextPage = () => {
	return (
		<PageLayout title='Snippet'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Snippet</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Displays lines of copiable code texts for the command line.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default</h2>
					<h3 className='text-lg text-neutral-400'>Default style</h3>
					<IDE code={snippetCode} scope={snippetScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Prompt</h2>
					<h3 className='text-lg text-neutral-400'>
						Promt can be turned on and off with <InlineCode>prompt</InlineCode>
						prop.
					</h3>{' '}
					<IDE code={promptCode} scope={promptScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Invert</h2>
					<IDE code={darkCode} scope={darkScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default SnippetPage
