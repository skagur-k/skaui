import { Button, Item, Menu } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container align="start">
	<Menu.Trigger menuButton={<Button className="w-full">Menu</Button>}>
		<Item key="1">Option 1</Item>
	</Menu.Trigger>
</Container>
`
const sizesScope = { Button, Menu, Item, Container }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<Menu.Trigger menuButton={<Button>Menu</Button>}>
					<Item key='1'>Hello World</Item>
				</Menu.Trigger>
				<h1 className='text-5xl font-black'>Button</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Simplest UI Component that triggers user events.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Different button sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
