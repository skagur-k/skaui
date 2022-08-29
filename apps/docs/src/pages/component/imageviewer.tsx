import { ImageViewer, InlineCode } from '@skaui/core'
import { NextPage } from 'next'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const imageCode = `<Container col align="start">
	<Container>
		<ImageViewer
			alt='Image'
			src='https://bit.ly/3KpFEMB'
		/>
	</Container>
</Container>
`
const imageScope = { ImageViewer, Container }

const captionCode = `<Container col align="start">
	<Container>
		<ImageViewer
			alt='Image'
			tags={['image', 'react', 'js']}
			caption='Caption'
			src='https://bit.ly/3KpFEMB'
		/>
	</Container>
</Container>
`
const captionScope = { ImageViewer, Container }

const ImageViewerPage: NextPage = () => {
	return (
		<PageLayout title='Image Viewer'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>ImageViewer</h1>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>ImageViewer</h2>
					<h3 className='text-lg text-neutral-400'>
						Images can be zoomed in on click. Clicking on the image again will
						close the overlay.
					</h3>
					<IDE code={imageCode} scope={imageScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Caption & Tags</h2>
					<h3 className='text-lg text-neutral-400'>
						Users can display caption & tags with{' '}
						<InlineCode>caption</InlineCode> and <InlineCode>Tags</InlineCode>{' '}
						props.
					</h3>
					<IDE code={captionCode} scope={captionScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ImageViewerPage
