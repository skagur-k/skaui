import { KBD, Input } from '@skaui/core'
import { NextPage } from 'next'
import { useState } from 'react'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `<Container>
				<Input
					prefix='https://'
					placeholder='Please input your text'
					size='sm'
					label='Small'
					errorMessage={'This is wrong!'}
				/>
</Container>
`
const sizesScope = { Input, Container }

const TogglePage: NextPage = () => {
	const [value, setValue] = useState<string>('')
	console.log(value)

	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<Input
					prefix='https://'
					placeholder='Please input your text'
					size='sm'
					label='Small'
					onChange={setValue}
					errorMessage={'This is wrong!'}
				/>
				<h1 className='text-5xl font-black'>Input</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Form Element with label and input.
				</h3>
				<h3 className='text-base text-neutral-400'>
					Toggles can be focused with <KBD>Tab</KBD> and be switched on and off
					with <KBD>Space</KBD> key.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Toggles with various sizes for different use cases.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TogglePage
