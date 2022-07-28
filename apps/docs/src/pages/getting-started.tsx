import { NextPage } from 'next'
import { Button } from '@skaui/button'

const GettingStarted: NextPage = () => {
	return (
		<div className={'flex flex-col'}>
			<div className='title flex flex-col gap-10'>
				<h1 className='text-4xl font-black'>Getting Started</h1>
				<p className='text-xl'>This is a description for the component</p>
			</div>
		</div>
	)
}

export default GettingStarted
