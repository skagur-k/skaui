import { Breadcrumbs, Link } from '@skaui/core'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
	<Breadcrumbs>
		<Breadcrumbs.Item>
			<NextLink href='/'>Home</NextLink>
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			<NextLink href='/'>Components</NextLink>
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			<NextLink href='/'>Navigation</NextLink>
		</Breadcrumbs.Item>
		<Breadcrumbs.Item>
			<NextLink href='/'>Breadcrumbs</NextLink>
		</Breadcrumbs.Item>
	</Breadcrumbs>
</Container>
`
const sizesScope = { Breadcrumbs, NextLink, Container }

const linkCode = `<Container>
	<Link href="https://github.com">
		Enabled Link
	</Link>
	<Link isDisabled href="https://github.com">
		Disabled Link
	</Link>
</Container>
`
const linkScope = { Breadcrumbs, Link, NextLink, Container }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Navigation</h1>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Link</h2>
					<h3 className='text-lg text-neutral-400'>
						Breadcrumbs display a heirarchy of links to the current page of an
						application.
					</h3>
					<IDE code={linkCode} scope={linkScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Breadcrumbs</h2>
					<h3 className='text-lg text-neutral-400'>
						Breadcrumbs display a heirarchy of links to the current page of an
						application.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
