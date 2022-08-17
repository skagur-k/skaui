import { KBD, Toggle } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<Toggle size='sm'>Small Toggle</Toggle>
	<Toggle size='md'>Medium Toggle</Toggle>
	<Toggle size='lg'>Large Toggle</Toggle>
</Container>
`
const sizesScope = { Toggle, Container }

const variantCode = `<Container>
	<Toggle>Default</Toggle>
	<Toggle type='success'>Success</Toggle>
	<Toggle type='error'>Error</Toggle>
</Container>
`
const variantScope = { Toggle, Container }

const TogglePage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Toggle</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					A simple switch that displays boolean value.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Toggles can be focused with <KBD>Tab</KBD> and be switched on and off
					with <KBD>Space</KBD> key.
				</h3>
				{/* 
				<Toggle size='md' type=''>
					Medium Toggle
				</Toggle> */}

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Toggles with various sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types</h2>
					<h3 className='text-lg text-neutral-400'>
						Toggles with different types.
					</h3>
					<IDE code={variantCode} scope={variantScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TogglePage