import { Select, useTheme, useToast } from '@skaui/core'
import React from 'react'
import { FiMonitor, FiMoon, FiSun } from 'react-icons/fi'

interface ThemeSelectProps {
	className?: string
}

const ThemeSelect = (props: ThemeSelectProps) => {
	const { className } = props
	const { selectTheme, systemMode } = useTheme()
	const toast = useToast()

	function capitalize(text: string) {
		return text.toString().charAt(0).toUpperCase() + text.toString().slice(1)
	}

	function handleSelect(key: React.Key) {
		const theme = capitalize(key.toString())

		if (key === 'system') {
			toast(`${theme} Mode (${capitalize(systemMode)}) Enabled.`, {
				title: 'Theme Provider',
			})
		} else {
			toast(`${theme} Mode Enabled.`, { title: 'Theme Provider' })
		}
		selectTheme(key.toString())
	}

	return (
		<Select
			aria-label='Theme Select'
			className={className}
			onSelectionChange={handleSelect}
			defaultSelectedKey={'system'}
		>
			<Select.Item textValue='System' key='system'>
				<FiMonitor className='mr-1' /> System
			</Select.Item>
			<Select.Item textValue='Light' key='light'>
				<FiSun className='mr-1 ' /> Light
			</Select.Item>
			<Select.Item textValue='Dark' key='dark'>
				<FiMoon className='mr-1 ' /> Dark
			</Select.Item>
		</Select>
	)
}

export default ThemeSelect
