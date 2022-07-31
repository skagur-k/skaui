import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Theming: NextPage = () => {
	return (
		<PageLayout>
			<div className={'flex flex-col'}>
				<div className='title flex flex-col gap-10'>
					<h1 className='text-4xl font-black'>Theming</h1>
					<p className='text-xl'>This is a description for the component</p>
				</div>
			</div>
		</PageLayout>
	)
}

export default Theming
