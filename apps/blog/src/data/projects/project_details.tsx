import Project1Cover from '../../../public/static/projects/skagurdev.webp'
import Project1CoverDark from '../../../public/static/projects/skagurdev-dark.webp'
import Project2Cover from '../../../public/static/projects/skaui.webp'
import Project2CoverDark from '../../../public/static/projects/skaui-dark.webp'

import { AnyLink } from '../../components/Link'

const Project1Details = () => {
	return (
		<p className=''>
			<span className='font-bold dark:text-gray-200'>skagur.dev</span> is a
			portfolio website designed and developed by Nam Hyuck Kim. This site is
			developed with{' '}
			<span className='font-bold dark:text-gray-200'>Next.js</span>, a frontend
			Javascript framework built upon React.js, and is designed based on{' '}
			<span className='underline'>SKA UI</span>, a UI component library. All
			pages are statically generated. The project is deployed on{' '}
			<span className='font-bold dark:text-gray-200'>Vercel</span>.
		</p>
	)
}

export const Project1 = {
	details: <Project1Details />,
	light: Project1Cover,
	dark: Project1CoverDark,
}

const Project2Details = () => {
	return (
		<>
			<p className=''>
				SKA UI is a React UI component library / Design System that emphasizes
				on minimalism simplicity inspired by Vercel&apos;s Design System. The
				project adopts Adobe&apos;s{' '}
				<span className='font-bold'>React Spectrum Library</span> which provides
				accessible UI primitives. The library provides accessibility and
				behavior accordinig to WAI-ARIA Practices, supporting full screen
				readers and keyboard navigation.
			</p>
			<p>
				Please visit{' '}
				<AnyLink
					href='https://skaui.skagur.dev'
					className='font-bold bg-[color:var(--accents-2)] px-1'
				>
					SKA UI DOCS
				</AnyLink>{' '}
				page for details.
			</p>
		</>
	)
}

export const Project2 = {
	details: <Project2Details />,
	light: Project2Cover,
	dark: Project2CoverDark,
}
