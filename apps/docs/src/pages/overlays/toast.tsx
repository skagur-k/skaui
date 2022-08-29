import { Button, InlineCode, useToast } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const ToastPage: NextPage = () => {
	const simpleCode = `() => {
	const toast = useToast()
	
	return (
		<Container>
			<Button onPress={() => toast('Simple Toast')}>Simple Toast</Button>
		</Container>
	)
}
`
	const simpleScope = { Button, Container, useToast }

	const titleCode = `() => {
	const toast = useToast()
	
	return (
		<Container>
			<Button onPress={() => toast('Toast with Title', {title: 'Title'})}>Toast with Title</Button>
			<Button onPress={() => toast('Toast with Action Button', 
				{title: 'Action', 
				action: {name: "Alert", onPress: () => alert('Action Button Pressed')}
				})}>Toast with Action</Button>
		</Container>
	)
}
`
	const titleScope = { Button, Container, useToast }

	const typesCode = `() => {
	const toast = useToast({maxToasts:5})
	
	return (
		<Container>
			<Button type="secondary" onPress={() => toast('Info Toast')}>Info</Button>
			<Button type="success" onPress={() => toast.success('Success Toast')}>Success</Button>
			<Button type="error" onPress={() => toast.error('Error Toast')}>Error</Button>
		</Container>
	)
}
`
	const typesScope = { Button, Container, useToast }

	return (
		<PageLayout title='Toast'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Toast</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Simplest UI Component that triggers user events.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Toast</h2>
					<IDE code={simpleCode} scope={simpleScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Title & Action Button</h2>
					<h3 className='text-xl font-medium text-neutral-400'>
						Users can set the title of the toast passing in{' '}
						<InlineCode>title</InlineCode> prop to the toast.
					</h3>
					<h3 className='text-xl font-medium text-neutral-400'>
						Action Button can by set by passing in{' '}
						<InlineCode>action</InlineCode> prop to the toast.
					</h3>
					<IDE code={titleCode} scope={titleScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types</h2>
					<IDE code={typesCode} scope={typesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Options - Max Toasts</h2>
					<h3 className='text-xl font-medium text-neutral-400'>
						Users can set maximum number of toasts to display by passing in{' '}
						<InlineCode>maxToasts</InlineCode> prop to the toast hook.
					</h3>
					<IDE code={typesCode} scope={typesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ToastPage
