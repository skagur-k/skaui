import { Toggle } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Description: NextPage = () => {

	return (
		<PageLayout>
			<div className='flex flex-col gap-5'>
				<Toggle size='sm'>Hello</Toggle>
				<Toggle size='md' />
				<Toggle size='lg' />
			</div>
		</PageLayout>
	)
}

export default Description
