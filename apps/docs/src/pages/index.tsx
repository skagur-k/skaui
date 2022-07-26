import { NextPage } from 'next'
import { Button } from '@skaui/button'

const Home: NextPage = () => {
	return (
		<div className={'flex justify-center items-center h-screen'}>
			<Button>Is it slow?</Button>
		</div>
	)
}

export default Home
