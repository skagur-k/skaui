export default {
	defaultTitle: 'SKA UI | skagur.dev',
	titleTemplate: '%s | SKA UI',
	description: 'UI Component & Design system developed by skagur.dev',
	canonical: 'skaui.skagur.dev',
	additionalMetaTags: [
		{
			name: 'theme-color',
			content: '#000000',
		},
	],
	additionalLinkTags: [
		{
			rel: 'icon',
			href: '/favicon.ico',
		},
		{
			rel: 'manifest',
			href: '/site.webmanifest',
		},
	],
	openGraph: {
		type: 'website',
		site_name: 'SKA UI | skagur.dev',
		url: 'https://skaui.skagur.dev',
		title: 'SKA UI | skagur.dev',
		description: 'UI Component & Design system developed by skagur.dev',
		images: [
			{
				url: '/og-image.webp',
				width: 1200,
				height: 630,
				alt: 'ska ui - skagur.dev',
			},
		],
	},
}
