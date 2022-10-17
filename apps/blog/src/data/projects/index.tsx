import {
	SiAdobe,
	SiC,
	SiJavascript,
	SiNextdotjs,
	SiReact,
	SiRollupdotjs,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from 'react-icons/si'
import { IProject } from '../../components/Project/Project.types'

import * as Projects from './project_details'

export const techicons = {
	nextjs: <SiNextdotjs className='w-6 h-6' />,
	typescript: <SiTypescript className='w-6 h-6' />,
	javascript: <SiJavascript className='w-6 h-6' />,
	tailwind: <SiTailwindcss className='w-6 h-6' />,
	vercel: <SiVercel className='w-6 h-6' />,
	reactaria: <SiAdobe className='w-6 h-6' />,
	react: <SiReact className='w-6 h-6' />,
	contentlayer: <SiC className='w-6 h-6' />,
	rollup: <SiRollupdotjs className='w-6 h-6' />,
}

const projects: IProject[] = [
	{
		id: 1,
		name: 'skagur.dev',
		slug: 'skagurdev',
		period: '2021 ~ Present',
		summary: 'Portfolio website developed with Next.JS and SKA UI.',
		description: Projects.Project1.details,
		githubRepo: 'https://github.com/skagur-k/skagur.dev',
		coverimagelight: Projects.Project1.light,
		coverimagedark: Projects.Project1.dark,
		projectUrl: '/',
		stacks: [
			{ name: 'Next.JS', icon: techicons.nextjs, url: 'https://nextjs.org/' },
			{
				name: 'React',
				icon: techicons.react,
			},
			{
				name: 'Tailwind CSS',
				icon: techicons.tailwind,
				url: 'https://tailwindcss.com/',
			},
			{ name: 'TypeScript', icon: techicons.typescript },
			{ name: 'Vercel', icon: techicons.vercel, url: 'https://vercel.com' },
		],
	},
	{
		id: 2,
		name: 'SKA UI',
		slug: 'skaui',
		period: '2022 - Present',
		summary: 'Simple & Intuitive UI Component Library / Design System',
		description: Projects.Project2.details,
		githubRepo: 'https://github.com/skagur-k/skaui',
		coverimagelight: Projects.Project2.light,
		coverimagedark: Projects.Project2.dark,
		projectUrl: 'https://skaui.skagur.dev',
		stacks: [
			{
				name: 'React Aria',
				icon: techicons.reactaria,
				url: 'https://react-spectrum.adobe.com/react-aria/',
			},
			{
				name: 'Tailwind CSS',
				icon: techicons.tailwind,
				url: 'https://tailwindcss.com/',
			},
			{ name: 'TypeScript', icon: techicons.typescript },
			{ name: 'Vercel', icon: techicons.vercel, url: 'https://vercel.com' },
			{ name: 'Rollup', icon: techicons.rollup },
		],
	},
]

export default projects
