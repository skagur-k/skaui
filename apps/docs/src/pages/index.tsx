import { Button, InlineCode } from '@skaui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import PageLayout from '../layouts/PageLayout'

const HomePage: NextPage = () => {
	const router = useRouter()

	return (
		<PageLayout>
			<div className='flex h-full w-full min-w-full flex-col items-center justify-center gap-6'>
				<h1 className='text-5xl font-black'>SKA UI</h1>
				<h1 className='text-xl font-bold text-neutral-500'>
					Simple & Intuitive UI Component for React
				</h1>
				<h1 className='text-base font-medium text-neutral-500'>
					Designed & Developed by skagur
				</h1>
				<Button size='lg' onPress={() => router.push('/getting-started')}>
					<div>
						Getting Started with<InlineCode>@skaui/core</InlineCode>
					</div>
				</Button>
			</div>
		</PageLayout>
	)
}

export default HomePage
