import { Button, Input } from '@skaui/core'
import Modal from '@skaui/core/src/components/modal/Modal'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const modalCode = `() => {
	const [isOpen, setOpen] = React.useState(false)

	return (<Container>
		<Button onPress={() => setOpen(true)}>Open Modal</Button>
		<Modal
		isOpen={isOpen}
		title='Modal Title'
		onClose={() => setOpen(false)}
		>
			<div className="flex flex-col gap-4">
				Modal is an overlay component designed for user interaction.
			</div>
		</Modal>
	</Container>)
}
`
const modalScope = { Button, Modal, Container }

const longCode = `() => {
	const [isOpen, setOpen] = React.useState(false)

	return (<Container>
		<Button onPress={() => setOpen(true)}>Open Modal</Button>
		<Modal
		isOpen={isOpen}
		title='Modal Title'
		onClose={() => setOpen(false)}
		>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit eligendi error est maiores, fugiat saepe mollitia eos, quibusdam odio maxime expedita, cupiditate animi illo. Facilis non illum voluptatum nulla?
			</div>
		</Modal>
	</Container>)
}
`
const longScope = { Button, Modal, Container }

const actionCode = `() => {
	const [isOpen, setOpen] = React.useState(false)
	const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	return (<Container>
		<Button onPress={() => setOpen(true)}>Open Modal</Button>
		<Modal
		isOpen={isOpen}
		title='Modal Title'
		onClose={() => setOpen(false)}
		confirmLabel="Confirm"
		confirmAction={() => alert(name + ' ' + email)}
		>
			<div className="flex flex-col gap-8">
				Please provided the following information.
				<Input width="100&" value={name} onChange={setName} label="Name"/>
				<Input width="100%" value={email} onChange={setEmail} label="Email"/>
			</div>
		</Modal>
	</Container>)
}
`
const actionScope = { Button, Modal, Input, Container }

const controlledCode = `() => {
	const [isOpen, setOpen] = React.useState(false)
	const [message, setMessage] = React.useState('')
	return (
		<Container col align="center">
			<Input label="Your message:" value={message} onChange={setMessage} width="300px" placeholder="Input your message for the dialog"/>
			<Button onPress={() => setOpen(true)}>Open Modal</Button>
			<Modal
			isOpen={isOpen}
			title='Your message'
			onClose={() => setOpen(false)}
			>
				<div>
					<span className="text-lg font-bold">{message}</span>
				</div>
		</Modal>
	</Container>)
}
`
const controlledScope = { Button, Modal, Input, Container }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Modal</h1>

				<h3 className='text-xl font-medium text-neutral-400'>
					Overlay dialog for interaction with the user.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Modal</h2>

					<IDE code={modalCode} scope={modalScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Modal with Action</h2>

					<IDE code={actionCode} scope={actionScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Modal with long content</h2>

					<IDE code={longCode} scope={longScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled</h2>

					<IDE code={controlledCode} scope={controlledScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
