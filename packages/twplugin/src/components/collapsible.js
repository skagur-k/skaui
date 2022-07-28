function collapsible() {
	return {
		'@apply px-2 py-4 overflow-hidden': {},
		'@apply border-t border-b border-neutral-100': {},

		'&-title': {
			'@apply items-center cursor-pointer text-lg font-bold flex justify-between':
				{},
		},

		'&.collapsible-notransition .collapsible-content-wrapper': {
			'@apply transition-none': {},
		},

		'&-content-wrapper': {
			'@apply block transition-all duration-300 ease-in-out overflow-hidden':
				{},
		},
		'&-content-content': {
			'@apply mt-8 h-auto box-content': {},
		},
	}
}

module.exports = Collapsible = (colors) => ({
	'.collapsible': {
		...collapsible(),
	},
})
