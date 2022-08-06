import { useToast } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const GettingStarted: NextPage = () => {
	const toast = useToast()

	const renderable = (
		<div>
			<p>
				<strong>Renderable Test</strong> is successful
			</p>
			<p>
				<strong>Renderable Test</strong> is successful
			</p>
			<p>
				<strong>Renderable Test</strong> is successful
			</p>
			<p>
				<strong>Renderable Test</strong> is successful
			</p>
		</div>
	)

	return (
		<PageLayout>
			<div className='flex flex-col gap-4'>
				<button onClick={() => toast('Hello')}>Success!</button>
				<button
					onClick={() =>
						toast(renderable, {
							title: 'info',
							action: {
								name: 'Undo',
								onClick: () => {
									alert('clicked!')
								},
							},
						})
					}
				>
					Info!
				</button>
				<button
					onClick={() =>
						toast.success('Success', {
							title: 'Success!!',
							action: {
								name: 'Cancel',
								onClick: () => {
									alert('clicked!')
								},
							},
						})
					}
				>
					Success!
				</button>
				<button
					onClick={() =>
						toast.error(
							'This is a kind of long error message that may span message that may span message that may span message that may span message that may span multiple lines. Doing this to test how it works with long toast messages',
							{
								title: 'Error!',
								action: {
									name: 'Canecl',
									onClick: () => {
										alert('clicked!')
									},
								},
							}
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
