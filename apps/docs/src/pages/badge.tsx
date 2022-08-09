import { Badge } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Accordion: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex items-center gap-5'>
				<Badge outline size='sm'>
					1
				</Badge>
				<Badge size='md'>2</Badge>
				<Badge size='lg'>3</Badge>
				<Badge outline color='gray' contrast>
					Badge
				</Badge>
				<Badge color='red' contrast>
					Badge
				</Badge>
				<Badge size='lg' color='blue' outline>
					Badge
				</Badge>
				<Badge color='blue' outline>
					1
				</Badge>
				
			</div>
		</PageLayout>
	)
}

export default Accordion
