// Converted automatically using ./tools/themeFromVsCode
import { PrismTheme } from 'prism-react-renderer'
import colors from 'tailwindcss/colors'

const theme: PrismTheme = {
	plain: {
		backgroundColor: 'transparent',
	},
	styles: [
		{
			types: ['comment'],
			style: {
				color: colors.neutral[400],
				fontWeight: '400',
			},
		},
		{
			types: ['builtin'],
			style: {
				color: 'rgb(0, 112, 193)',
			},
		},
		{
			types: ['inserted'],
			style: {
				color: 'rgb(1, 146, 103)',
			},
		},
		{
			types: ['number'],
			style: {
				color: 'rgb(209, 81, 45)',
			},
		},
		{
			types: ['operator'],
			style: {
				color: 'rgb(0, 0, 0)',
			},
		},
		{
			types: ['constant', 'char'],
			style: {
				color: 'rgb(25, 33, 94)',
				fontWeight: '800',
			},
		},
		{
			types: ['tag'],
			style: {
				color: colors.green[800],
			},
		},
		{
			types: ['attr-name'],
			style: {
				color: colors.blue[500],
			},
		},
		{
			types: ['deleted', 'string'],
			style: {
				color: 'rgb(255, 26, 26)',
			},
		},
		{
			types: ['changed', 'punctuation'],
			style: {
				color: 'rgb(4, 81, 165)',
			},
		},
		{
			types: ['function', 'keyword', 'punctuation'],
			style: {
				color: 'rgb(44, 51, 51)',
			},
		},
		{
			types: ['class-name'],
			style: {
				color: colors.neutral[800],
			},
		},
		{
			types: ['selector'],
			style: {
				color: colors.blue[800],
			},
		},
		{
			types: ['property'],
			style: {
				color: colors.red[800],
			},
		},
		{
			types: ['boolean'],
			style: {
				color: colors.green[800],
			},
		},
	],
}

export default theme
