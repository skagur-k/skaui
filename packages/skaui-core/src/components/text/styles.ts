import clsx from 'clsx'
import { TextProps } from './Text.types'
import styles from './Text.module.css'

interface TextClassProps extends TextProps {}

export enum ElementTypes {
	'div',
	'span',
	'main',
	'article',
	'section',
	'form',
	'figure',
	'label',
	'header',
	'li',
	'a',
	'footer',
	'ul',
}

function useTextClass(props: TextClassProps) {
	const { size, weight, transform, align, truncate } = props

	const sizes = {
		xs: styles.text_xs,
		sm: styles.text_sm,
		base: styles.text_base,
		lg: styles.text_lg,
		xl: styles.text_xl,
		'2xl': styles.text_2xl,
		'3xl': styles.text_3xl,
		'4xl': styles.text_4xl,
		'5xl': styles.text_5xl,
	}

	const weights = {
		100: styles.text_wght_100_thin,
		200: styles.text_wght_200_extralight,
		300: styles.text_wght_300_light,
		400: styles.text_wght_400_normal,
		500: styles.text_wght_500_medium,
		600: styles.text_wght_600_semibold,
		700: styles.text_wght_700_bold,
		800: styles.text_wght_800_extrabold,
		900: styles.text_wght_900_black,
	}

	const transformations = {
		uppercase: 'uppercase',
		lowercase: 'lowercase',
		capitalize: 'capitalize',
		normal: 'normal-case',
	}

	const alignments = {
		left: styles.text_align_left,
		center: styles.text_align_center,
		right: styles.text_align_right,
	}

	const classes = clsx(styles.text, [
		size && sizes[size],
		weight && weights[weight],
		transform && transformations[transform],
		align && alignments[align],
		typeof truncate === 'boolean'
			? styles.text_truncate
			: styles.text_lineclamp,
	])

	return classes
}

export { useTextClass }
