import { Button, ButtonGroup, IconButton } from '@skaui/core'
import { NextPage } from 'next'
import { FiAnchor } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import PageLayout from '../layouts/PageLayout'

const Buttons: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-4'>
				<ButtonGroup variant='solid'>
					<Button prefix={<FiAnchor />} suffix={<FiAnchor />} type='success'>
						Error
					</Button>
					<Button>Default</Button>
					<Button type='secondary'>Secondary</Button>
				</ButtonGroup>
				<ButtonGroup attached variant='solid'>
					<Button type='secondary'>Error</Button>
					<Button type='secondary'>Default</Button>
					<Button type='secondary'>Secondary</Button>
				</ButtonGroup>
				<ButtonGroup attached variant='solid'>
					<Button variant='ghost'>Error</Button>
					<Button variant='ghost'>Default</Button>
					<Button variant='ghost'>Secondary</Button>
				</ButtonGroup>
				<ButtonGroup attached variant='solid'>
					<IconButton type='success'>
						<SiGithub />
					</IconButton>
					<IconButton type='error'>
						<SiGithub />
					</IconButton>
					<IconButton type='secondary'>
						<SiGithub />
					</IconButton>
				</ButtonGroup>
				<Button suffix={<FiAnchor className='h-5 w-5' />} variant='text'>
					Default
				</Button>
				<Button
					suffix={<FiAnchor className='h-5 w-5' />}
					variant='text'
					type='success'
				>
					Success
				</Button>
				<Button
					suffix={<FiAnchor className='h-5 w-5' />}
					variant='text'
					type='error'
				>
					Error
				</Button>
				<Button
					suffix={<FiAnchor className='h-5 w-5' />}
					variant='text'
					type='secondary'
				>
					Secondary
				</Button>
			</div>
		</PageLayout>
	)
}

export default Buttons
