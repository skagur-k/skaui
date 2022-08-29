import React from 'react'
import PageLayout from '../layouts/PageLayout'
// import styles from '../styles/404.module.css'
const PageNotFound = () => {
	return (
		<PageLayout title='Page Not Found'>
			<div
				className={
					'flex h-[80vh] w-screen flex-col items-center justify-center md:w-[50vw]'
				}
			>
				<div className='title flex flex-col gap-10'>
					<h1 className='text-2xl font-black'>404 | Page Not Found</h1>
					<p className='text-xl'>
						Sorry. Page you are looking for is not found.{' '}
					</p>
				</div>
			</div>
		</PageLayout>
	)
}

export default PageNotFound
