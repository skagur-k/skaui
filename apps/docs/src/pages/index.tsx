import { NextPage } from 'next'
import { motion } from 'framer-motion'
import PageLayout from '../layouts/PageLayout'

const Home: NextPage = () => {
	return (
		<PageLayout>
			<div className='title flex flex-col gap-10'>
				<h1 className='text-4xl font-black'>Component</h1>
				<p className='text-xl'>This is a description for the component</p>
			</div>
		</PageLayout>
	)
}

export default Home
