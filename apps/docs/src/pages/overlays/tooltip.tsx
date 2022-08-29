import { KBD, TooltipTrigger } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const tooltipCode = `() => {
	const [isOpen, setOpen] = React.useState(false)
	return (
		<Container align="center" gap={8}>
			<TooltipTrigger position="bottom" tooltip="Tooltip">Bottom</TooltipTrigger>
			<TooltipTrigger position="top" tooltip="Tooltip">Top</TooltipTrigger>
			<TooltipTrigger position="right" tooltip="Tooltip">Right</TooltipTrigger>
			<TooltipTrigger position="left" tooltip="Tooltip">Left</TooltipTrigger>
		</Container>
	)
}
`
const tooltipScope = { TooltipTrigger, Container }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Tooltips</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Tooltips appear when the trigger is focused. Try focusing the Trigger
					button with <KBD>Tab</KBD>
				</h3>
				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Positions</h2>
					<IDE code={tooltipCode} scope={tooltipScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
