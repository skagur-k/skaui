import { Button, Item, Menu } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container align="start">
	<div className="flex w-full">
		<Menu.Trigger menuButton={<Button className="w-full">Menu</Button>}>
			<Item key="1">Option 1</Item>
			<Item key="2">Option 2</Item>
			<Item key="3">Option 3</Item>
			<Item key="4">Option 4</Item>
		</Menu.Trigger>
	</div>
</Container>
`
const sizesScope = { Button, Menu, Item, Container }

const MenuPage: NextPage = () => {
	return (
		<PageLayout title='Menu' workinprogress>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Menu</h1>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Menu</h2>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default MenuPage
