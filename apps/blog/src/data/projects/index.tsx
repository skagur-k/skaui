import {
	SiC,
	SiJavascript,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from 'react-icons/si'
import { IProject } from '../../components/Project/Project.types'

import * as ProjectDetails from './project_details'

// import Project1Cover from '@/public/static/images/projects/skagurdev.webp'
// import Project1CoverDark from '@/public/static/images/projects/skagurdev-dark.webp'

// import Project1, {
// 	light as light1,
// 	dark as dark1,
// } from '@/components/Projects/ProjectDetails/Project1'

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
		description: <ProjectDetails.Project1 />,
		githubRepo: 'https://github.com/skagur-k/skagur.dev',
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
		description: <ProjectDetails.Project1 />,
		githubRepo: 'https://github.com/skagur-k/skagur.dev',
		projectUrl: '/',
		stacks: [
			{ name: 'Next.JS', icon: icons.nextjs },
			{ name: 'JavaScript', icon: icons.javascript },
			{ name: 'Tailwind CSS', icon: icons.tailwind },
			{ name: 'TypeScript', icon: icons.typescript },
			{ name: 'Vercel', icon: icons.vercel },
			{ name: 'ContentLayer', icon: icons.contentlayer },
		],
	},
]

export default projects
