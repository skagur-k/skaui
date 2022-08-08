import { useToast, Button, IconButton, ButtonGroup } from '@skaui/core'
import { NextPage } from 'next'
import { FiAnchor } from 'react-icons/fi'
import { SiAdobe, SiGithub } from 'react-icons/si'
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
				<Button
					prefix={<FiAnchor className='h-5 w-5' />}
					suffix={<FiAnchor className='h-5 w-5' />}
					type='success'
				>
					Success
				</Button>
				<Button type='error'>Error</Button>
				<Button type='default'>Default</Button>
				<Button type='secondary'>Secondary</Button>
				<p>Ghost</p>
				<Button
					isDisabled
					size='block'
					align='start'
					prefix={<FiAnchor className='h-5 w-5' />}
					suffix={<FiAnchor className='h-5 w-5' />}
				>
					Success
				</Button>
				<Button
					type='secondary'
					isDisabled
					size='block'
					align='start'
					prefix={<FiAnchor className='h-5 w-5' />}
					suffix={<FiAnchor className='h-5 w-5' />}
				>
					Success
				</Button>
				<Button
					type='success'
					isDisabled
					size='block'
					align='start'
					prefix={<FiAnchor className='h-5 w-5' />}
					suffix={<FiAnchor className='h-5 w-5' />}
				>
					Success
				</Button>
				<Button
					type='error'
					isDisabled
					size='block'
					align='grow'
					prefix={<FiAnchor className='h-5 w-5' />}
					suffix={<FiAnchor className='h-5 w-5' />}
				>
					Error
				</Button>
				<Button
					type='default'
					variant='ghost'
					size='block'
					align='end'
					prefix={<FiAnchor className='h-5 w-5' />}
					suffix={<FiAnchor className='h-5 w-5' />}
				>
					Default
				</Button>
				<Button
					suffix={<FiAnchor className='h-5 w-5' />}
					type='secondary'
					size='block'
				>
					Secondary
				</Button>
				<p>Ghost</p>
				<Button
					suffix={<FiAnchor className='h-5 w-5' />}
					variant='text'
					type='success'
				>
					Success
				</Button>

				<div className='flex gap-2'>
					<div className='flex flex-col gap-4'>
						<IconButton size='sm' type='success'>
							<SiGithub />
						</IconButton>
						<IconButton size='md' type='error'>
							<SiGithub />
						</IconButton>
						<IconButton size='lg' type='secondary'>
							<SiGithub />
						</IconButton>
					</div>
					<div className='flex flex-col gap-4'>
						<IconButton variant='ghost' size='sm' type='success'>
							<SiGithub />
						</IconButton>
						<IconButton variant='ghost' size='md' type='error'>
							<SiGithub />
						</IconButton>
						<IconButton variant='ghost' size='lg' type='secondary'>
							<SiGithub />
						</IconButton>
					</div>
					<div className='flex flex-col gap-4'>
						<IconButton variant='iconOnly' size='sm' type='success'>
							<SiGithub />
						</IconButton>
						<IconButton variant='iconOnly' size='md' type='error'>
							<SiGithub />
						</IconButton>
						<IconButton variant='iconOnly' size='lg' type='secondary'>
							<SiGithub />
						</IconButton>
					</div>
				</div>
				<ButtonGroup variant='solid'>
					<Button variant='text'>Error</Button>
					<Button variant='text'>Default</Button>
					<Button variant='text'>Secondary</Button>
				</ButtonGroup>
			</div>
		</PageLayout>
	)
}

export default GettingStarted
