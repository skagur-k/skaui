import { Button, ButtonGroup, IconButton, useToast } from '@skaui/core'
import { NextPage } from 'next'
import { FiAnchor } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import PageLayout from '../layouts/PageLayout'

const Buttons: NextPage = () => {
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
				<ButtonGroup variant='solid'>
					<Button prefix={<FiAnchor />} suffix={<FiAnchor />} type='success'>
						Error
					</Button>
					<Button>Default</Button>
					<Button type='secondary'>Secondary</Button>
				</ButtonGroup>
				<ButtonGroup attached variant='solid'>
					<Button variant='ghost'>Error</Button>
					<Button variant='ghost' type='error'>
						Default
					</Button>
					<Button variant='ghost'>Secondary</Button>
				</ButtonGroup>
				<ButtonGroup attached variant='ghost'>
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
			</div>
		</PageLayout>
	)
}

export default Buttons
