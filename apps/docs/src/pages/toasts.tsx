import { useToast, Button } from '@skaui/core'
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
				<Button size='sm' onClick={() => toast('Hello')}>
					Success!
				</Button>
				<Button
					size='md'
					variant='ghost'
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
				</Button>
				<Button
					size='lg'
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
				</Button>
				<Button
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
				</Button>

				<p>Solid</p>
				<Button type='success'>Success</Button>
				<Button type='error'>Error</Button>
				<Button type='default'>Default</Button>
				<Button type='secondary'>Secondary</Button>
				<p>Ghost</p>
				<Button type='success' size='block'>
					Success
				</Button>
				<Button type='error' size='block'>
					Error
				</Button>
				<Button type='default' size='block'>
					Default
				</Button>
				<Button type='secondary' size='block'>
					Secondary
				</Button>
			</div>
		</PageLayout>
	)
}

export default GettingStarted
