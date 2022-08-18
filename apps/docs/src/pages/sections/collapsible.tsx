import { Collapsible } from '@skaui/core'
import { NextPage } from 'next'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const defaultCode = `
<Collapsible title="Collapsible">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse!
</Collapsible>`
const defaultScope = { Collapsible }

const jsxCode = `
<Collapsible 
	title={
		<div className="text-3xl font bold text-neutral-500 hover:text-blue-500">
			JSX Dynamic Title
		</div>}>
	<div className="text-2xl text-red-500">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos nobis, veniam quis sequi molestiae modi omnis aperiam dolores voluptate quia esse!
	</div>
</Collapsible>`
const jsxScope = { Collapsible }

const CollapsiblePage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Collapsible</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					A UI component in which the content is shown or hidden with a click.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Default State</h2>
					<h3 className='text-lg text-neutral-400'>
						The content of the collapsible can be shown or hidden with a click
						on the title bar.
					</h3>
					<IDE code={defaultCode} scope={defaultScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>JSX Title & Content</h2>
					<h3 className='text-lg text-neutral-400'>
						Dynamic content using JSX elements for title & content.
					</h3>
					<IDE code={jsxCode} scope={jsxScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default CollapsiblePage
