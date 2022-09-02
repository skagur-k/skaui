import clsx from 'clsx'
import ThemeSelect from '../../ThemeSelect/ThemeSelect'
import styles from './Rightbar.module.css'
export const Rightbar = () => {
	return (
		<aside className={clsx(styles.wrapper, 'scrollbar')}>
			<div className={styles.content}>
				<ThemeSelect />
				<div>On This Page (TOC)</div>
				<div>Back to top</div>
				<div>tags</div>
				<div>edit on github</div>
				<div>date</div>
				<div>category</div>
				<div>category</div>
			</div>
		</aside>
	)
}
