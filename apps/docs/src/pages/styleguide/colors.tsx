import { InlineCode, Note } from '@skaui/core'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Palette from '../../components/palette/Palette'
import PageLayout from '../../layouts/PageLayout'
import getPropertyValue from '../../utils/getVarValue'

const accentColors = [
	{
		name: 'Foreground',
		varName: 'var(--skaui-foreground)',
		color: getPropertyValue('--skaui-foreground'),

		textColor: 'var(--accents-1)',
	},
	{
		name: 'Accent 1',
		varName: 'var(--accents-1)',
		color: getPropertyValue('--accents-1'),

		textColor: 'var(--accents-8)',
	},
	{
		name: 'Accent 2',
		varName: 'var(--accents-2)',
		color: getPropertyValue('--accents-2'),

		textColor: 'var(--accents-8)',
	},
	{
		name: 'Accent 3',
		varName: 'var(--accents-3)',
		color: getPropertyValue('--accents-3'),

		textColor: 'var(--accents-8)',
	},
	{
		name: 'Accent 4',
		varName: 'var(--accents-4)',
		color: getPropertyValue('--accents-4'),

		textColor: 'var(--accents-1)',
	},
	{
		name: 'Accent 5',
		varName: 'var(--accents-5)',
		color: getPropertyValue('--accents-5'),

		textColor: 'var(--accents-1)',
	},
	{
		name: 'Accent 6',
		varName: 'var(--accents-6)',
		color: getPropertyValue('--accents-6'),

		textColor: 'var(--accents-1)',
	},
	{
		name: 'Accent 7',
		varName: 'var(--accents-7)',
		color: getPropertyValue('--accents-7'),

		textColor: 'var(--accents-1)',
	},
	{
		name: 'Accent 8',
		varName: 'var(--accents-8)',
		color: getPropertyValue('--accents-8'),

		textColor: 'var(--accents-1)',
	},
	{
		name: 'Background',
		varName: 'var(--skaui-background)',
		color: getPropertyValue('--skaui-background'),
		textColor: 'var(--accents-8)',
	},
]

const successColors = [
	{
		name: 'Lighter',
		varName: 'var(--skaui-success-lighter)',
		color: getPropertyValue('--skaui-success-lighter'),

		textColor: 'white',
	},
	{
		name: 'Light',
		varName: 'var(--skaui-success-light)',
		color: getPropertyValue('--skaui-success-light'),

		textColor: 'white',
	},
	{
		name: 'Default',
		varName: 'var(--skaui-success)',
		color: getPropertyValue('--skaui-success'),

		textColor: 'white',
	},
	{
		name: 'Dark',
		varName: 'var(--skaui-success-dark)',
		color: getPropertyValue('--skaui-success-dark'),

		textColor: 'white',
	},
]

const errorColors = [
	{
		name: 'Lighter',
		varName: 'var(--skaui-error-lighter)',
		color: getPropertyValue('--skaui-error-lighter'),

		textColor: 'white',
	},
	{
		name: 'Light',
		varName: 'var(--skaui-error-light)',
		color: getPropertyValue('--skaui-error-light'),

		textColor: 'white',
	},
	{
		name: 'Default',
		varName: 'var(--skaui-error)',
		color: getPropertyValue('--skaui-error'),

		textColor: 'white',
	},
	{
		name: 'Dark',
		varName: 'var(--skaui-error-dark)',
		color: getPropertyValue('--skaui-error-dark'),

		textColor: 'white',
	},
]

const warningColors = [
	{
		name: 'Lighter',
		varName: 'var(--skaui-warning-lighter)',
		color: getPropertyValue('--skaui-warning-lighter'),

		textColor: 'black',
	},
	{
		name: 'Light',
		varName: 'var(--skaui-warning-light)',
		color: getPropertyValue('--skaui-warning-light'),

		textColor: 'black',
	},
	{
		name: 'Default',
		varName: 'var(--skaui-warning)',
		color: getPropertyValue('--skaui-warning'),

		textColor: 'black',
	},
	{
		name: 'Dark',
		varName: 'var(--skaui-warning-dark)',
		color: getPropertyValue('--skaui-warning-dark'),

		textColor: 'black',
	},
]

const ColorsPaage: NextPage = () => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return mounted ? (
		<PageLayout title='Colors'>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Color</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					Palette of colors used across <InlineCode>@skaui</InlineCode>
				</h3>
				<Note>
					Colors for Light & Dark Mode may be different. Try switching theme.
				</Note>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Accents</h2>
					<Palette colors={accentColors} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Success</h2>
					<Palette colors={successColors} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Error</h2>
					<Palette colors={errorColors} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Warning</h2>
					<Palette colors={warningColors} />
				</div>
			</div>
		</PageLayout>
	) : null
}

export default ColorsPaage
