import clsx from 'clsx'
import ThemeSelect from '../../ThemeSelect/ThemeSelect'
import styles from './Rightbar.module.css'
export const Rightbar = () => {
	return (
		<aside className={clsx(styles.wrapper, 'scrollbar')}>
			<div className={styles.content}>
				<ThemeSelect />
			</div>
		</aside>
	)
}
