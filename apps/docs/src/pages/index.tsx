import { NextPage } from 'next'
import { Button } from '@skaui/button'

const Home: NextPage = () => {
	return (
		<div className={'flex h-screen items-center justify-center'}>
			Hello World
			<Button>Button</Button>
			<Button disabled>Button</Button>
			<Button type='secondary'>Button</Button>
		</div>
	)
}

export default Home
