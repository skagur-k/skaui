import { Button } from '@skaui/button'
import React from 'react'

export const Header = () => {
	const classes = ''

	return (
		<nav>
			<div className='z-100 fixed left-0 top-0 h-full w-72 bg-red-200'>
				<div className='relative h-full'>
					<div className='flex flex-col overflow-hidden p-2'>
						<div className='flex justify-center'>
							<div className='py-12'>SKA-UI</div>
						</div>
						<div className='grid grid-cols-2 gap-2'>
							<div className='grid justify-center'>
								<Button size='lg'>GitHub</Button>
							</div>
							<div className='grid justify-center'>
								<Button size='lg'>skagur.dev</Button>
							</div>
						</div>
					</div>

					<div className='h-full bg-blue-200 p-2'>Hello!This is cool</div>
				</div>
			</div>
		</nav>
	)
}
