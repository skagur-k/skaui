import { NextPage } from 'next'
import { Button } from '@skaui/button'
import { IDE } from '../components/ide'

const GettingStarted: NextPage = () => {
	const code = `
	() => (<h1>Hello World
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	<h2>Hello</h2>
	
	</h1>
	
		)
	`

	return (
		<div className={'flex flex-col gap-20'}>
			<div className='title flex flex-col gap-10'>
				<h1 className='text-4xl font-black'>Getting Started</h1>
				<p className='text-xl'>This is a description for the component</p>
			</div>

			<div>
				<IDE code={code} />
			</div>
		</div>
	)
}

export default GettingStarted
