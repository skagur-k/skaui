import { StatusDot } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `
<div className="flex justify-evenly">
	<div className="flex flex-col gap-2">
		<StatusDot type='neutral'>Neutral</StatusDot>
		<StatusDot type='positive'>Positive</StatusDot>
		<StatusDot type='negative'>Negative</StatusDot>
		<StatusDot type='info'>Info</StatusDot>
		<StatusDot type='notice'>Notice</StatusDot>
	</div>
	<div className="flex flex-col gap-2">
		<StatusDot type='info'>Building</StatusDot>
		<StatusDot type='positive'>Ready</StatusDot>
		<StatusDot type='negative'>Error</StatusDot>
		<StatusDot type='neutral'>Queued</StatusDot>
		<StatusDot type='notice'>Waiting</StatusDot>
	</div>
</div>
`
const sizesScope = { StatusDot, Container }

const StatusDotPage: NextPage = () => {
	return (
		<PageLayout title='Status Dot'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Status Dot</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					A simple indicator of the status of a particular operation.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types</h2>
					<h3 className='text-lg text-neutral-400'>
						Different types of status dots for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default StatusDotPage
