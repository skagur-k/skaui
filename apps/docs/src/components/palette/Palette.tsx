import { useToast } from '@skaui/core'
import styles from './Palette.module.css'

interface PaletteProps {
	name?: string
	varName?: string
	color?: string
	textColor?: string
}

const Color = ({ name, color, textColor, varName }: PaletteProps) => {
	const toast = useToast()
	function handleClick(value?: string) {
		const Text = (
			<div>
				Copied
				<span className='mx-2 border p-1 font-bold'>{value}</span>
				to clipboard.
			</div>
		)
		toast(Text, {
			title: 'Style Guide - Colors',
		})
		navigator.clipboard.writeText(value || '')
	}

	return (
		<div
			className={styles.colorWrapper}
			style={{ background: varName, color: textColor }}
		>
			<span className={styles.name}>{name}</span>
			<span onClick={() => handleClick(varName)} className={styles.varName}>
				{varName}
			</span>
			<span onClick={() => handleClick(color)} className={styles.hexCode}>
				{color}
			</span>
		</div>
	)
}

const Palette = ({ colors }: { colors: PaletteProps[] }) => {
	return (
		<div className={styles.paletteWrapper}>
			{colors.map((item) => (
				<Color
					name={item.name}
					color={item.color}
					varName={item.varName}
					textColor={item.textColor}
				/>
			))}
		</div>
	)
}

export default Palette
