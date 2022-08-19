import { Text, InlineCode, CodeBlock, OL, LI, UL } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const sizesCode = `() => {
const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']
return (
	<div className="flex flex-col gap-1">
		{sizes.reverse().map((size) => (
			<Text truncate size={size}>Lorem ipsum dolor sit amet... ({size})</Text>
		))}
	</div>
	)
}
`

const sizesScope = { Text, Container }

const weightsCode = `() => {
const weights = [900,800,700,600,500,400,300,200,100]
return (
	<div className="flex flex-col gap-1">
		{weights.map((weight) => (
			<Text size="2xl" weight={weight}>Lorem ipsum dolor sit amet... ({weight})</Text>
		))}
	</div>
	)
}
`
const weightsScope = { Text, Container }

const transformationCode = `() => {
return (
	<div className="flex flex-col gap-2">
		<Text size="lg" transform="normal">Lorem ipsum dolor sit amet... (Normal)</Text>
		<Text size="lg" transform="uppercase">Lorem ipsum dolor sit amet... (Uppercase)</Text>
		<Text size="lg" transform="lowercase">Lorem ipsum dolor sit amet... (Lowercase)</Text>
		<Text size="lg" transform="capitalize">Lorem ipsum dolor sit amet... (Capitalize)</Text>
	</div>
	)
}
`
const transformationScope = { Text, Container }

const alignmentCode = `() => {
return (
	<div className="flex flex-col gap-2">
		<Text size="lg" align="left">Lorem Ipsum</Text>
		<Text size="lg" align="center">Lorem Ipsum</Text>
		<Text size="lg" align="right">Lorem Ipsum</Text>
	</div>
	)
}
`
const alignmentScope = { Text, Container }

const truncateCode = `() => {
return (
	<div className="flex flex-col gap-4">
		<Container col>
			<Text size="xl" truncate={1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat beatae temporibus in. Illum totam sunt, ut architecto culpa alias aliquid, labore voluptates voluptate consectetur suscipit, ullam nisi at ab distinctio!</Text>
			<Text size="xl" truncate={2}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat beatae temporibus in. Illum totam sunt, ut architecto culpa alias aliquid, labore voluptates voluptate consectetur suscipit, ullam nisi at ab distinctio!</Text>
			<Text size="xl" truncate={3}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat beatae temporibus in. Illum totam sunt, ut architecto culpa alias aliquid, labore voluptates voluptate consectetur suscipit, ullam nisi at ab distinctio!</Text>
		</Container>
	</div>
	)
}
`
const truncateScope = { Text, Container }

const inlineCode = `() => {
return (
	<div className="flex flex-col gap-4">
		<Container col align="start">
			<p><InlineCode>const</InlineCode> is a reserved keyword in javacript.</p>
			<p>There are many helpful functions in <InlineCode>Math</InlineCode> package.</p>
		</Container>
	</div>
	)
}
`
const inlineScope = { InlineCode, Container }

const blockCode = `() => {
return (
	<div className="flex flex-col gap-4">
			<CodeBlock>
				${`
					const [value, setValue] = React.useState()
					`}
			</CodeBlock>
	</div>
	)
}
`
const blockScope = { CodeBlock, Container }

const monoCode = `() => {
return (
	<div className="flex flex-col gap-4">
		<Text size="xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
		<Text size="xl" mono>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
	</div>
	)
}
`
const monoScope = { Text, Container }

const olCode = `() => {
return (
	<Container col align="start">
		<OL>
			<Text>This is the list of things we need to do:</Text>
			<LI>Book a plane ticket to JeJu.</LI>
			<LI>Book a hotel room.</LI>
			<LI>Pack luggages and leave for airport.</LI>
		</OL>
	</Container>
	)
}
`
const olScope = { OL, LI, Text, Container }

const ulCode = `() => {
return (
		<Container col align="start">
			<UL>
				<Text>List of Programming languages</Text>
				<LI>Java</LI>
				<LI>C</LI>
				<LI>JavaScript</LI>
				<LI>Python</LI>
			</UL>
		</Container>
	)
}
`
const ulScope = { UL, LI, Text, Container }

const TextPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Text</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Elegantly styled display of texts.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Weights ranging from 100 to 800.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Weights</h2>
					<h3 className='text-lg text-neutral-400'>
						Weights ranging from 100 to 800.
					</h3>
					<IDE code={weightsCode} scope={weightsScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Transformations</h2>
					<h3 className='text-lg text-neutral-400'>
						Text transformations: Uppercase, Lowercase, Capitalize, Normal
					</h3>
					<IDE code={transformationCode} scope={transformationScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Alignments</h2>
					<h3 className='text-lg text-neutral-400'>
						Text alignments: Left, Center, Right
					</h3>
					<IDE code={alignmentCode} scope={alignmentScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Truncate</h2>
					<IDE code={truncateCode} scope={truncateScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Monospace</h2>
					<IDE code={monoCode} scope={monoScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Inline Code</h2>
					<IDE code={inlineCode} scope={inlineScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Code Block</h2>
					<IDE code={blockCode} scope={blockScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Ordered List</h2>
					<IDE code={olCode} scope={olScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Unordered List</h2>
					<IDE code={ulCode} scope={ulScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TextPage
