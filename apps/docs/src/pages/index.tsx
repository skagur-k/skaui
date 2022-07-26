import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className={'flex justify-center items-center h-screen'}>
			<p className='text-3xl'>Hello World</p>
			<button className='btn btn-solid'>BUTTON!</button>
		</div>
	)
}

export default Home
