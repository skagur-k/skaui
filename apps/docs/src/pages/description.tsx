import { Description, KBD } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Accordion: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-5'>
				<Description title='Section Title'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, a
					necessitatibus. Dicta eum consectetur eligendi nobis, sapiente
					praesentium quia minima odio perferendis quos dolore veritatis, ullam,
					consequuntur accusamus earum ad.
				</Description>
				<KBD mac meta />
				<KBD meta />
				<KBD mac meta shift alt ctrl />
				<KBD meta shift />
				<KBD mac shift />
				<KBD alt />
				<KBD ctrl>A</KBD>
				<KBD enter />
				<KBD>/</KBD>
				<KBD deletekey />
				<KBD alt ctrl>
					DEL
				</KBD>
			</div>
		</PageLayout>
	)
}

export default Accordion
