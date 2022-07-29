// Converted automatically using ./tools/themeFromVsCode
import colors from 'tailwindcss/colors'

const theme = {
	plain: {
		color: '#000000',
		backgroundColor: 'transparent',
	},
	styles: [
		{
			types: ['comment'],
			style: {
				color: colors.neutral[500],
			},
		},
		{
			types: ['builtin'],
			style: {
				color: 'rgb(0, 112, 193)',
			},
		},
		{
			types: ['number', 'variable', 'inserted'],
			style: {
				color: 'rgb(9, 134, 88)',
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
				color: 'rgb(129, 31, 63)',
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
				color: colors.red[500],
			},
		},
		{
			types: ['deleted', 'string'],
			style: {
				color: 'rgb(163, 21, 21)',
			},
		},
		{
			types: ['changed', 'punctuation'],
			style: {
				color: 'rgb(4, 81, 165)',
			},
		},
		{
			types: ['function', 'keyword'],
			style: {
				color: colors.blue[700],
			},
		},
		{
			types: ['class-name', 'function', 'punctuation'],
			style: {
				color: colors.neutral[800],
			},
		},
	],
}

export default theme
