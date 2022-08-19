import { InlineCode, Tag, Tags, Text } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const tagCode = `() => {
return (<Container>
	<Tag>Tag 1</Tag>
	<Tag>Tag 2</Tag>
	<Tag>Tag 3</Tag>
</Container>)
}
`
const tagScope = { Text, Tags, Tag, Container }

const tagsCode = `() => {
	const tags = [
			'Tag 1',
			'Tag 2',
			'Tag 3',
	]

	return (
	<Container>
		<Container col align="center">
			<Text weight="800">Removable</Text>
			<Tags tags={tags}/>
		</Container>
		<Container col align="center">
			<Text weight="800">Not removable</Text>
			<Tags tags={tags} removable={false}/>
		</Container>
	</Container>
	)
}
`
const tagsScope = { Text, Tags, Tag, Container }

const TagPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Tag</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Displays a unique keyword: individually or as part of a set.
				</h3>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Tag</h2>
					<h3 className='text-lg text-neutral-400'>Individual Tag</h3>
					<IDE code={tagCode} scope={tagScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Tag Group</h2>
					<h3 className='text-lg text-neutral-400'>
						Displays a set of unique tags. Tags can optionally be removed on
						click. This can be set with <InlineCode>removable</InlineCode> prop.
					</h3>
					<IDE code={tagsCode} scope={tagsScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TagPage
