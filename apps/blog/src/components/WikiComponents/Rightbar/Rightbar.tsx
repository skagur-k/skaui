import clsx from 'clsx'
import { AnyLink } from '../../Link'
import styles from './Rightbar.module.css'
export const Rightbar = () => {
	return (
		<aside className={clsx(styles.wrapper, 'scrollbar')}>
			<div className={styles.content}>
				<AnyLink href='/wiki' className={styles.heading}>
					Rightbar
				</AnyLink>
			</div>
		</aside>
	)
}
