import { Button, InlineCode, KBD } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const groupCode = `<Container>
	<Button.Group>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Button.Group>
</Container>
`
const groupScope = { Button, Container }

const sizesCode = `<Container col align="center">
	<Button.Group attached size="sm">
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Button.Group>
	<Button.Group attached size="md">
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Button.Group>
	<Button.Group attached size="lg">
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Button.Group>
</Container>
`
const sizesScope = { Button, Container }

const attachedCode = `<Container>
	<Button.Group>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Button.Group>
	<Button.Group attached>
		<Button>Button 1</Button>
		<Button>Button 2</Button>
		<Button>Button 3</Button>
	</Button.Group>
</Container>
`
const attachedScope = { Button, Container }

const variantCode = `<Container col align="center">
	<Container>
		<Button.Group attached size="md" variant="solid">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
		<Button.Group attached size="md" variant="ghost">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
		<Button.Group attached size="md" variant="text">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
	</Container>
</Container>
`
const variantScope = { Button, Container }

const typesCode = `<Container col align="center">
	<Container>
		<Button.Group attached size="md" type="success">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
		<Button.Group attached size="md" type="error">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
	</Container>
	<Container>
		<Button.Group attached size="md" variant="ghost" type="success">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
		<Button.Group attached size="md" variant="ghost" type="error">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
	</Container>
	<Container>
		<Button.Group attached size="md" variant="text" type="success">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
		<Button.Group attached size="md" variant="text" type="error">
			<Button>Button 1</Button>
			<Button>Button 2</Button>
			<Button>Button 3</Button>
		</Button.Group>
	</Container>
</Container>
`
const typesScope = { Button, Container }

const ButtonGroupPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Button Group</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Button Group is comprised of multiple Button components.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Buttons can be focused with <KBD>Tab</KBD> and be interacted with{' '}
					<KBD>Space</KBD> and <KBD>Enter</KBD> keys.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Button Group</h2>
					<IDE code={groupCode} scope={groupScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Attached & Detached</h2>
					<h3 className='text-lg text-neutral-400'>
						Button Group can be either detached or attached. This can be set
						with <InlineCode>attached</InlineCode> prop.
					</h3>
					<IDE code={attachedCode} scope={attachedScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Variants</h2>
					<IDE code={variantCode} scope={variantScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types</h2>
					<IDE code={typesCode} scope={typesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonGroupPage
