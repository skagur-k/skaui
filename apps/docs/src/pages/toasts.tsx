import { File, FileViewer, Folder, useToast } from '@skaui/core'
import { NextPage } from 'next'
import * as ex from '../data/prismexample'
import PageLayout from '../layouts/PageLayout'

const GettingStarted: NextPage = () => {
	const toast = useToast()

	const renderable = (
		<div>
			<strong>Renderable Test</strong> is successful
		</div>
	)

	return (
		<PageLayout>
			<div className='flex flex-col gap-4'>
				<button onClick={() => toast(renderable, 'Title')}>Info!</button>
				<button onClick={() => toast.success('Success', 'Build Success')}>
					Success!
				</button>
				<button
					onClick={() =>
						toast.error(
							'This is a kind of long error message that may span message that may span message that may span message that may span message that may span multiple lines. Doing this to test how it works with long toast messages',
							'Long messaged Error'
						)
					}
				>
					lorem
				</button>
			</div>
		</PageLayout>
	)
}

export default GettingStarted
