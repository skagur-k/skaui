import { InlineCode, KBD, Meter, Button, Input } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `
<Container col>
	<Meter height={4} label="Meter 1" value={40}/>
	<Meter height={6} label="Meter 2" value={60}/>
	<Meter height={8} label="Meter 3" value={80}/>
</Container>
`
const sizesScope = { Meter, Container }

const minmaxCode = `() => {
	const [value, setValue] = React.useState(50)
	const [min, setMin] = React.useState(0)
	const [max, setMax] = React.useState(100)

	return (
		<Container col>
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
			<Meter label="Min & Max Values" value={value} minValue={min} maxValue={max}/>
		</Container>
	)
}
`
const minmaxScope = { Meter, Container, Input }

const controlledCode = `() => {
	const [value, setValue] = React.useState(50)

	function handleIncrease() {
		if(value<100){
			setValue(value => value + 10)
		}
	}

	function handleDecrease() {
		if(value>0){
			setValue(value => value - 10)
		}	
	}

	return (
		<Container col align="center">
			<Container align="center">
				<Button size="sm" onPress={handleDecrease}>-10</Button>
				<Input
					size="sm"
					label={'Value'}
					defaultValue={value}
					onChange={(e) => setValue(Number(e.valueOf()))}
					type='number'>{value}</Input>
				<Button size="sm" onPress={handleIncrease}>+10</Button>
			</Container>
			<Meter label="Min & Max Values" value={value}/>
		</Container>
	)
}
`
const controlledScope = { Meter, Container, Input, Button }

const typesCode = `
<Container col>
	<Meter label="Default" value={10}/>
	<Meter label="Success" value={30} type="success"/>
	<Meter label="Error" value={50} type="error"/>
	<Meter label="Warning" value={70} type="warning"/>
	<Meter label="Secondary" value={90} type="secondary"/>
</Container>
`
const typesScope = { Meter, Container }

const colorsCode = `() => {
	const [value, setValue] = React.useState(50)

	const colors = {
			0: '#96ceb4',
			20: '#ffeead',
			40: '#ff6f69',
			60: '#ffcc5c',
			80: '#88d8b0',
	}

	function handleIncrease() {
		if(value<100){
			setValue(value => value + 10)
		}
	}

	function handleDecrease() {
		if(value>0){
			setValue(value => value - 10)
		}	
	}

	return (
		<Container col>
			<Container>
				<Button size="sm" onPress={handleDecrease}>-10</Button>
				<Button size="sm" onPress={handleIncrease}>+10</Button>
			</Container>
			<Meter label="Custom Colors" value={value} colors={colors}/>
		</Container>
	)
}
`
const colorsScope = { Meter, Container, Button }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Meter</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Meter Component displays a <strong>quantity</strong> within a known
					range.
				</h3>
				<h3 className='text-lg text-neutral-400'>
					Value of the Meter component can be set with{' '}
					<InlineCode>value</InlineCode> prop.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Meter Components with provided heights. Heights can be set with{' '}
						<InlineCode>height</InlineCode> prop.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						Default height is <KBD>4</KBD>
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Controlled State</h2>
					<h3 className='text-lg text-neutral-400'>
						Controlled meter component.
					</h3>
					<IDE code={controlledCode} scope={controlledScope} />
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
					<h2 className='text-4xl font-bold'>Types</h2>
					<h3 className='text-lg text-neutral-400'>
						Different types of Meter Component.
					</h3>
					<IDE code={typesCode} scope={typesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Custom Colors</h2>
					<h3 className='text-lg text-neutral-400'>
						Color of the meter bar can be customized by providing an object to{' '}
						<InlineCode>colors</InlineCode> prop.
					</h3>
					<IDE code={colorsCode} scope={colorsScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
