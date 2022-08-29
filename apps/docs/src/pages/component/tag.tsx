import { InlineCode, Tag, Tags, Text, Badge, Button } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const tagCode = `
<Container>
	<Tag>Tag 1</Tag>
	<Tag>Tag 2</Tag>
	<Tag>Tag 3</Tag>
</Container>
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

const badgeCode = `
<Container>
	<Badge>+1</Badge>
	<Badge>New</Badge>
	<Badge>Success</Badge>
</Container>
`
const badgeScope = { Badge, Container }

const badgeSizeCode = `
<Container>
	<Badge size="sm">Small</Badge>
	<Badge size="md">Medium</Badge>
	<Badge size="lg">Large</Badge>
</Container>
`
const badgeSizeScope = { Badge, Container }

const badgeTypeCode = `
<Container col align='center'>
	<Container>
		<Badge>Badge</Badge>
		<Badge type="success">Success</Badge>
		<Badge type="error">Error</Badge>
		<Badge type="warning">Warning</Badge>
		<Badge type="info">Info</Badge>
	</Container>
	<Container>
		<Badge outline>Badge</Badge>
		<Badge outline type="success">Success</Badge>
		<Badge outline type="error">Error</Badge>
		<Badge outline type="warning">Warning</Badge>
		<Badge outline type="info">Info</Badge>
	</Container>
	<Container>
		<Badge pill>Badge</Badge>
		<Badge pill type="success">Success</Badge>
		<Badge pill type="error">Error</Badge>
		<Badge pill type="warning">Warning</Badge>
		<Badge pill type="info">Info</Badge>
	</Container>
	<Container>
		<Badge pill outline>Badge</Badge>
		<Badge pill outline type="success">Success</Badge>
		<Badge pill outline type="error">Error</Badge>
		<Badge pill outline type="warning">Warning</Badge>
		<Badge pill outline type="info">Info</Badge>
	</Container>
</Container>
`
const badgeTypeScope = { Badge, Container }

const badgeVariantCode = `() => {
return (<Container>
	<Badge>Solid</Badge>
	<Badge outline>Outlined</Badge>
	<Badge pill>Pilled</Badge>
</Container>)
}
`
const badgeVariantScope = { Badge, Container }

const badgeUsageCode = `
<Container>
	<Button>Notifications <Badge className="ml-1">1</Badge></Button>
	<Text>Headline <Badge className="ml-1">New</Badge></Text>
</Container>
`
const badgeUsageScope = { Badge, Button, Text, Container }

const TagPage: NextPage = () => {
	return (
		<PageLayout title='Tag'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Tag & Badge</h1>
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

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Badge</h2>
					<h3 className='text-lg text-neutral-400'>
						Badge components are used to display an indicator or count a number.
					</h3>
					<IDE code={badgeCode} scope={badgeScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Badge Sizes</h2>
					<IDE code={badgeSizeCode} scope={badgeSizeScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Badge Variants</h2>
					<IDE code={badgeVariantCode} scope={badgeVariantScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Badge Types</h2>
					<IDE code={badgeTypeCode} scope={badgeTypeScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Usages</h2>
					<IDE code={badgeUsageCode} scope={badgeUsageScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default TagPage
