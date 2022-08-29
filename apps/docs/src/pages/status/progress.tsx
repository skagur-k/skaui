import { InlineCode, KBD, Progress, Input } from '@skaui/core'
import { NextPage } from 'next'
import Link from 'next/link'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

// TODO: CIRCULAR PROGRESS BAR

const sizesCode = `
<Container col align="center">
	<Progress height={4} label="Loading..." value={40}/>
	<Progress height={6} label="Loading..." value={60}/>
	<Progress height={8} label="Loading..." value={80}/>
</Container>
`
const sizesScope = { Progress, Container }

const formatCode = `
<Container col align="center">
	<Progress 
		value={40} 
		label="Sending (in KRW)..." 
		formatOptions={{style: 'currency', currency: 'KRW'}}/>
	<Progress 
		value={40} 
		label="Loading (in Kilogram)..." 
		formatOptions={{style: 'unit', unit: 'kilogram'}}/>
</Container>
`
const formatScope = { Progress, Container }

const customformatCode = `
<Container col align="center">
	<Progress 
		value={30} 
		valueLabel="3 out of 10"
		label="Finding..."/> 
</Container>
`
const customformatScope = { Progress, Container }

const indeterminateCode = `
<Container col align="center">
	<Progress isIndeterminate label='Loading...' />
</Container>
`
const indeterminateScope = { Progress, Container }

const minmaxCode = `() => {
	const [value, setValue] = React.useState(50)
	const [min, setMin] = React.useState(0)
	const [max, setMax] = React.useState(100)

	return (
		<Container col align="center">
			<Container>
				<Input
					size="sm"
					label={'Min Value'}
					defaultValue={min}
					onChange={(e) => setMin(Number(e.valueOf()))}
					type='number'/>
				<Input
					size="sm"
					label={'Max Value'}
					defaultValue={max}
					onChange={(e) => setMax(Number(e.valueOf()))}
					type='number'/>
				<Input
					size="sm"
					label={'Value'}
					defaultValue={value}
					value={value}
					onChange={(e) => setValue(Number(e.valueOf()))}
					type='number'/>
			</Container>
			<Progress label="Loading component..." value={value} minValue={min} maxValue={max}/>
		</Container>
	)
}
`
const minmaxScope = { Progress, Container, Input }

const ProgressPage: NextPage = () => {
	return (
		<PageLayout title="Progress">
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Progress</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Progress Component displays the progress of an operation. It shows
					either determinate or indeterminate progress of an operation over
					time.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Progress Components with various heights. Heights can be set with{' '}
						<InlineCode>height</InlineCode> prop.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						Default height is <KBD>4</KBD>
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Min & Max Value</h2>
					<h3 className='text-lg text-neutral-400'>
						Min & Max values can be set with <InlineCode>minValue</InlineCode>{' '}
						and <InlineCode>maxValue</InlineCode> props.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						Default values are <KBD>0</KBD> and <KBD>100</KBD>, respectively.
					</h3>
					<IDE code={minmaxCode} scope={minmaxScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Indeterminate</h2>
					<h3 className='text-lg text-neutral-400'>Indeterminate State</h3>
					<IDE code={indeterminateCode} scope={indeterminateScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Value formatting</h2>
					<h3 className='text-lg text-neutral-400'>
						Values are displayed as percentage by default.{' '}
						<InlineCode>formatOptions</InlineCode> can be passed to specify a
						format.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						<InlineCode>formatOptions</InlineCode> is compatible with the option
						parameter of{' '}
						<Link
							target='_blank'
							href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat'
						>
							<span className='cursor-pointer font-bold underline'>
								Intl.NumberFormat
							</span>
						</Link>
					</h3>

					<IDE code={formatCode} scope={formatScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Custom value formatting</h2>
					<h3 className='text-lg text-neutral-400'>
						Values are displayed as percentage by default.{' '}
						<InlineCode>valueLabel</InlineCode> can be passed to specify value
						formats.
					</h3>
					<IDE code={customformatCode} scope={customformatScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ProgressPage
