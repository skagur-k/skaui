import { File, FileViewer, Folder, InlineCode, Snippet } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const tailwindconfigjs = `/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [],
}

`

const nextconfigjs = `const skaui = ['@skaui/core']

const withTM = require('next-transpile-modules')(skaui)

module.exports = withTM({
	reactStrictMode: false,
})
`

const GettingStarted: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex h-full max-w-4xl flex-col gap-6'>
				<h1 className='text-5xl font-black'>Getting Started</h1>
				<h3 className='text-lg text-neutral-800 dark:text-neutral-100'>
					Quickest way to enjoy <InlineCode>@skaui/core</InlineCode>
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Installation</h2>
					<h3 className='text-lg text-neutral-800 dark:text-neutral-100'>
						1. Install <InlineCode>@skaui/core</InlineCode> package.
					</h3>
					<Snippet text={['npm install @skaui/core']} />
					<h3 className='text-lg text-neutral-800 dark:text-neutral-100'>
						2. Install and Configure{' '}
						<InlineCode>
							<a
								href='https://tailwindcss.com/docs/installation'
								target='_blank'
								rel='noopener noreferrer'
							>
								tailwind css
							</a>
						</InlineCode>
						.
					</h3>
					<Snippet text={['npm install -D tailwindcss']} />

					<h3 className='text-lg text-neutral-800 dark:text-neutral-100'>
						3. Add the highlighted lines to the config files.
					</h3>

					<FileViewer title='SKA UI - Installation'>
						<Folder name='src'>
							<File
								name='next.config.js'
								content={nextconfigjs}
								language={'javascript'}
								highlight={'1, 3'}
							/>
						</Folder>
						<File
							name='tailwind.config.js'
							content={tailwindconfigjs}
							language={'javascript'}
							highlight={'4'}
						/>
					</FileViewer>
				</div>
			</div>
		</PageLayout>
	)
}

export default GettingStarted
