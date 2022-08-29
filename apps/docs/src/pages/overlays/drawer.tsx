import { Button, Drawer } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const drawerCode = `() => {
	const [isOpen, setOpen] = React.useState(false)
	return (
		<Container align="center">
			<Button onPress={() => setOpen(true)}>Open Drawer</Button>
			<Drawer 
					isOpen={isOpen} 
					onClose={() => setOpen(false)}>
				<div className="flex justify-center items-center w-full h-screen">Drawer</div>
			</Drawer>
		</Container>
	)
}
`
const drawerScope = { Button, Drawer, Container }

const positionCode = `() => {
	const [rightOpen, setRightOpen] = React.useState(false)
	const [leftOpen, setLeftOpen] = React.useState(false)
	const [topOpen, setTopOpen] = React.useState(false)
	const [bottomOpen, setBottomOpen] = React.useState(false)

	return (
		<Container align="center">
			<Button onPress={() => setRightOpen(true)}>Right</Button>
			<Drawer 
					isOpen={rightOpen} 
					onClose={() => setRightOpen(false)}>
				<div className="flex justify-center items-center w-full h-screen">Right</div>
			</Drawer>
			<Button onPress={() => setLeftOpen(true)}>Left</Button>
			<Drawer 
					position="left"
					isOpen={leftOpen} 
					onClose={() => setLeftOpen(false)}>
				<div className="flex justify-center items-center w-full h-screen">Left</div>
			</Drawer>
			<Button onPress={() => setTopOpen(true)}>Top</Button>
			<Drawer 
					position="top"
					isOpen={topOpen} 
					onClose={() => setTopOpen(false)}>
				<div className="flex justify-center items-center h-full w-screen">Top</div>
			</Drawer>
			<Button onPress={() => setBottomOpen(true)}>Bottom</Button>
			<Drawer 
					position="bottom"
					isOpen={bottomOpen} 
					onClose={() => setBottomOpen(false)}>
				<div className="flex justify-center items-center h-full w-screen">Bottom</div>
			</Drawer>
		</Container>
	)
}
`
const positionScope = { Button, Drawer, Container }

const DrawerPage: NextPage = () => {
	return (
		<PageLayout title='Drawer'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Drawer</h1>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default Drawer</h2>
					<IDE code={drawerCode} scope={drawerScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Positions</h2>
					<IDE code={positionCode} scope={positionScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default DrawerPage
