export default {
	defaultTitle: 'skagur.dev',
	titleTemplate: '%s | skagur.dev',
	description: 'Personal portfolio site by Nam Hyuck Kim',
	canonical: 'https://skagur.dev/about',
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
		site_name: 'skagur.dev',
		url: 'https://skagur.dev',
		title: 'SKA UI | skagur.dev',
		description: 'Personal portfolio site by Nam Hyuck Kim',
		images: [
			{
				url: '/og-image.webp',
				width: 1200,
				height: 630,
				alt: 'skagur.dev',
			},
		],
	},
}
