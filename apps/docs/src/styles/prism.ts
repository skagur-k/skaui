// Converted automatically using ./tools/themeFromVsCode
import { PrismTheme } from 'prism-react-renderer'
import colors from 'tailwindcss/colors'

const theme: PrismTheme = {
	plain: {
		color: `var(--skaui-foreground)`,
		backgroundColor: 'transparent',
	},
	styles: [
		{
			types: ['attr-name'],
			style: {
				color: colors.blue[400],
			},
		},
		{
			types: ['class-name'],
			style: {
				color: `var(--accents-7)`,
				fontWeight: '800',
			},
		},
	],
}

export default theme
