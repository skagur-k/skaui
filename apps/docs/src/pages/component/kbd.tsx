import { KBD } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const kbdCode = `<Container col align="start">
	<Container>
		<KBD windows/>
		<KBD shift/>
		<KBD ctrl/>
		<KBD alt/>
		<KBD enter/>
		<KBD deletekey/>
		<KBD mac command/>
		<KBD mac ctrl/>
		<KBD mac shift/>
		<KBD mac alt/>
	</Container>
</Container>
`
const kbdScope = { KBD, Container }

const combiCode = `<Container col align="start">
	<Container col>
		<KBD ctrl>C</KBD>
		<KBD ctrl alt>Delete</KBD>
		<KBD command>D</KBD>
		<KBD windows>K</KBD>
		<p><KBD mac ctrl alt shift/></p>
	</Container>
</Container>
`
const combiScope = { KBD, Container }

const KBDPage: NextPage = () => {
	return (
		<PageLayout title='KBD'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>KBD</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					KBD is used to display keyboard inputs.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>KBD Tags</h2>
					<IDE code={kbdCode} scope={kbdScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Combinations</h2>
					<IDE code={combiCode} scope={combiScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default KBDPage
