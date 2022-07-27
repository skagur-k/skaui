import { useRouter } from 'next/router'
import React from 'react'
import { Header } from '../components/header'

export const Layout = ({ children }: { children: React.ReactElement }) => {
	const router = useRouter()

	let classes =
		'flex justify-center items-center w-full h-full bg-gray-100 min-h-screen'
	return (
		<div className={classes}>
			<Header />
			<div className='relative left-0 h-full w-full'>{children}</div>
		</div>
	)
}
