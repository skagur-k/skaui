export default {
	defaultTitle: 'skagur.dev',
	titleTemplate: '%s | skagur.dev',
	description: 'Personal portfolio site by Nam Hyuck Kim',
	canonical: 'skagur.dev/',
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
			rel: 'icon',
			href: '/favicon-16x16.png',
		},
		{
			rel: 'icon',
			href: '/favicon-32x32.png',
		},
		{
			rel: 'apple-touch-icon',
			href: '/apple-touch-icon.png',
		},
	],
	openGraph: {
		type: 'website',
		site_name: 'skagur.dev',
		url: 'https://skagur.dev',
		title: 'skagur.dev',
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
