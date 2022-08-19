import { IconButton } from '@skaui/core'
import { SettingsIcon } from '@skaui/core/src/icons'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<IconButton size='xs'>
		<SettingsIcon />
	</IconButton>
	<IconButton size='sm'>
		<SettingsIcon />
	</IconButton>
	<IconButton size='md'>
		<SettingsIcon />
	</IconButton>
	<IconButton size='lg'>
		<SettingsIcon />
	</IconButton>
	<IconButton size='xl'>
		<SettingsIcon />
	</IconButton>
</Container>
`
const sizesScope = { IconButton, Container, SettingsIcon }

const variantCode = `<Container >
	<Container col align="center">
		<IconButton variant='solid'>
			<SettingsIcon />
		</IconButton>
		<IconButton variant='ghost'>
			<SettingsIcon />
		</IconButton>
	</Container>
	<Container col align="center">
		<IconButton variant='solid' type='success'>
			<SettingsIcon />
		</IconButton>
		<IconButton variant='ghost' type='success'>
			<SettingsIcon />
		</IconButton>
	</Container>
	<Container col align="center">
		<IconButton variant='solid' type='error'>
			<SettingsIcon />
		</IconButton>
		<IconButton variant='ghost' type='error'>
			<SettingsIcon />
		</IconButton>
	</Container>
	<Container col align="center">
		<IconButton variant='solid' type='secondary'>
			<SettingsIcon />
		</IconButton>
		<IconButton variant='ghost' type='secondary'>
			<SettingsIcon />
		</IconButton>
	</Container>
</Container>
`
const variantScope = { IconButton, Container, SettingsIcon }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Icon Button</h1>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Different icon button sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Variants & Types</h2>
					<h3 className='text-lg text-neutral-400'>
						Icon Button variants & types.
					</h3>
					<IDE code={variantCode} scope={variantScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
