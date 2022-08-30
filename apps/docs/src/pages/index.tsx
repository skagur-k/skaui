import { Button, Drawer, Image, InlineCode, Link } from '@skaui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import PageLayout from '../layouts/PageLayout'

const HomePage: NextPage = () => {
	const router = useRouter()
	const [isOpen, setOpen] = useState(false)

	return (
		<PageLayout>
			<div className='flex h-full w-full min-w-full flex-col items-center justify-center gap-6'>
				<h1 className='text-5xl font-black'>SKA UI</h1>
				<h1 className='text-xl font-bold text-neutral-500'>
					Simple & Intuitive Design System
				</h1>
				<h1 className='text-base font-medium text-neutral-500'>
					Designed & Developed by{' '}
					<Button
						onPress={() => setOpen(true)}
						size='md'
						className='mx-2 outline-none'
					>
						skagur
					</Button>
				</h1>
				<Button size='lg' onPress={() => router.push('/getting-started')}>
					<div>
						Getting Started with<InlineCode>@skaui/core</InlineCode>
					</div>
				</Button>
				<Drawer
					position='bottom'
					isOpen={isOpen}
					onClose={() => setOpen(false)}
				>
					<div className='flex h-full w-full flex-col items-center justify-center gap-8 p-4'>
						<h1 className='text-3xl font-black'>Contacts</h1>
						<div className='flex gap-12'>
							<div className='relative h-36 w-36 rounded-full'>
								<Image
									src={'https://avatars.githubusercontent.com/u/8953479?v=4'}
									alt='Profile Image'
								/>
							</div>
							<div className='flex h-full flex-col justify-evenly'>
								<Link href='https://github.com/skagur-k' className='text-lg'>
									Github
								</Link>
								<Link href='https://skagur.dev' className='text-lg'>
									skagur.dev
								</Link>
							</div>
						</div>
					</div>
				</Drawer>
			</div>
		</PageLayout>
	)
}

export default HomePage
