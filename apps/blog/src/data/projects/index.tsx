import {
	SiC,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from 'react-icons/si'
import { IProject } from '../../components/Project/Project.types'

import * as Projects from './project_details'

export const icons = {
	nextjs: <SiNextdotjs className='w-6 h-6' />,
	typescript: <SiTypescript className='w-6 h-6' />,
	javascript: <SiJavascript className='w-6 h-6' />,
	tailwind: <SiTailwindcss className='w-6 h-6' />,
	vercel: <SiVercel className='w-6 h-6' />,
	contentlayer: <SiC className='w-6 h-6' />,
}

const projects: IProject[] = [
	{
		id: 1,
		name: 'skagur.dev',
		slug: 'skagurdev',
		period: 'May 2022 ~ Present',
		summary: 'Portfolio website developed with Next.JS and Tailwind CSS.',
		description: Projects.Project1.details,
		githubRepo: 'https://github.com/skagur-k/skagur.dev',
		coverimagelight: Projects.Project1.light,
		coverimagedark: Projects.Project1.dark,
		projectUrl: '/',
		stacks: [
			{ name: 'Next.JS', icon: icons.nextjs, url: 'https://nextjs.org/' },
			{
				name: 'JavaScript',
				icon: icons.javascript,
			},
			{
				name: 'Tailwind CSS',
				icon: icons.tailwind,
				url: 'https://tailwindcss.com/',
			},
			{ name: 'TypeScript', icon: icons.typescript },
			{ name: 'Vercel', icon: icons.vercel, url: 'https://vercel.com' },
			{
				name: 'ContentLayer',
				icon: icons.contentlayer,
				url: 'https://contentlayer.dev',
			},
		],
	},
	{
		id: 2,
		name: 'skagur.dev',
		slug: 'skagurdev',
		period: 'May 2022 ~ Present',
		summary: 'Portfolio website developed with Next.JS and Tailwind CSS.',
		description: Projects.Project1.details,
		githubRepo: 'https://github.com/skagur-k/skagur.dev',
		coverimagelight: Projects.Project1.light,
		coverimagedark: Projects.Project1.dark,
		projectUrl: '/',
		stacks: [
			{ name: 'Next.JS', icon: icons.nextjs, url: 'https://nextjs.org/' },
			{
				name: 'JavaScript',
				icon: icons.javascript,
			},
			{
				name: 'Tailwind CSS',
				icon: icons.tailwind,
				url: 'https://tailwindcss.com/',
			},
			{ name: 'TypeScript', icon: icons.typescript },
			{ name: 'Vercel', icon: icons.vercel, url: 'https://vercel.com' },
			{
				name: 'ContentLayer',
				icon: icons.contentlayer,
				url: 'https://contentlayer.dev',
			},
		],
	},
]

export default projects
