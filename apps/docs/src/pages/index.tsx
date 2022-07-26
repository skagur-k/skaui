import { NextPage } from 'next'
import { Button } from '@skaui/button'

const Home: NextPage = () => {
	return (
		<div className={'flex justify-center items-center h-screen'}>
			<p className='text-3xl'>Hello World!</p>
			<Button>Is it slow?</Button>
		</div>
	)
}

export default Home
