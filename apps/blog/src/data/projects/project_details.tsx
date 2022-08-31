import Project1Cover from '../../../public/static/projects/skagurdev/images/skagurdev.webp'
import Project1CoverDark from '../../../public/static/projects/skagurdev/images/skagurdev-dark.webp'

const Project1Details = () => {
	return (
		<p className=''>
			<span className='font-bold dark:text-gray-200'>skagur.dev</span> is a
			portfolio website designed and developed by Nam Hyuck Kim. This site is
			developed with{' '}
			<span className='font-bold dark:text-gray-200'>Next.js</span>, a frontend
			Javascript framework built upon React.js. All pages are statically
			generated, and are styled with{' '}
			<span className='font-bold dark:text-gray-200'>Tailwind CSS</span>. It is
			mostly written in javascript, but will be gradually migrated to
			typescript. Blog posts are written in{' '}
			<span className='underline'>MDX</span> and they are managed by{' '}
			<span className='font-bold dark:text-gray-200'>ContentLayer</span>. The
			project is deployed on{' '}
			<span className='font-bold dark:text-gray-200'>Vercel</span>.
		</p>
	)
}

export const Project1 = {
	details: <Project1Details />,
	light: Project1Cover,
	dark: Project1CoverDark,
}
