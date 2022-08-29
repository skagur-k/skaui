import { Button, KBD } from '@skaui/core'
import { SettingsIcon } from '@skaui/core/src/icons'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<Button size='sm'>Small Button</Button>
	<Button size='md'>Medium Button</Button>
	<Button size='lg'>Large Button</Button>
</Container>
`
const sizesScope = { Button, Container }

const disabledCode = `<Container>
	<Button isDisabled type='default'>Default</Button>
	<Button isDisabled type='secondary'>Secondary</Button>
	<Button isDisabled type='success'>Success</Button>
	<Button isDisabled type='error'>Error</Button>
</Container>
`
const disabledScope = { Button, Container }

const prefixsuffixCode = `<Container>
	<Button prefix={<SettingsIcon />}>Prefix</Button>
	<Button suffix={<SettingsIcon />}>Suffix</Button>
	<Button prefix={<SettingsIcon />} suffix={<SettingsIcon />}>Prefix & Suffix</Button>
</Container>
`

const prefixsuffixScope = { Button, Container, SettingsIcon }

const variantCode = `<Container>
	<Button variant="solid">Solid Button</Button>
	<Button variant='ghost'>Ghost Button</Button>
	<Button variant='text'>Text Button</Button>
</Container>
`

const variantScope = { Button, Container }

const typesCode = `<Container>
	<Button type='default'>Default</Button>
	<Button type='secondary'>Secondary</Button>
	<Button type='success'>Success</Button>
	<Button type='error'>Error</Button>
</Container>
`

const typesScope = { Button, Container }

const typevariantCode = `<Container col>
	<Container>
		<Button type='default'>Default</Button>
		<Button type='success'>Success</Button>
		<Button type='error'>Error</Button>
		<Button type='secondary'>Secondary</Button>
	</Container>
	<Container>
		<Button type='default' variant="ghost">Default</Button>
		<Button type='success' variant="ghost">Success</Button>
		<Button type='error' variant="ghost">Error</Button>
		<Button type='secondary' variant="ghost">Secondary</Button>
	</Container>
	<Container>
		<Button type='default' variant="text">Default</Button>
		<Button type='success' variant="text">Success</Button>
		<Button type='error' variant="text">Error</Button>
		<Button type='secondary' variant="text">Secondary</Button>
	</Container>
</Container>
`

const typevariantScope = { Button, Container }

const alignCode = `<Container col>
<Button prefix={<SettingsIcon />} suffix={<SettingsIcon/>} size='block' align='start'>Start</Button>
<Button prefix={<SettingsIcon />} suffix={<SettingsIcon/>} size='block' align='end'>End</Button>
<Button prefix={<SettingsIcon />} suffix={<SettingsIcon/>} size='block' align='grow'>Grow</Button>
<Button prefix={<SettingsIcon />} suffix={<SettingsIcon/>} size='block' align='center'>Center</Button>
</Container>
`

const alignScope = { Button, Container, SettingsIcon }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout title='Button'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Button</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Simplest UI Component that triggers user events.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Buttons can be focused with <KBD>Tab</KBD> and be interacted with{' '}
					<KBD>Space</KBD> and <KBD>Enter</KBD> keys.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Different button sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Disabled</h2>
					<IDE code={disabledCode} scope={disabledScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Prefix & Suffixes</h2>
					<h3 className='text-lg text-neutral-400'>
						Buttons with Prefix and/or Suffix.
					</h3>
					<IDE code={prefixsuffixCode} scope={prefixsuffixScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Variants</h2>
					<h3 className='text-lg text-neutral-400'>
						Button variants: Solid, Ghost & Text
					</h3>
					<IDE code={variantCode} scope={variantScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types</h2>
					<h3 className='text-lg text-neutral-400'>
						Button types: Default, Secondary, Success, Error
					</h3>
					<IDE code={typesCode} scope={typesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Types with variants</h2>
					<h3 className='text-lg text-neutral-400'>
						Button types with variants.
					</h3>
					<IDE code={typevariantCode} scope={typevariantScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Alignments</h2>
					<h3 className='text-lg text-neutral-400'>Button text alignments.</h3>
					<IDE code={alignCode} scope={alignScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
