import { Button } from '@skaui/button'
import React from 'react'
import styles from './Aside.module.css'
import { SiGithub } from 'react-icons/si'
import { FiTriangle } from 'react-icons/fi'

export const Aside = () => {
	return (
		<aside className='hidden md:flex'>
			{/* Aside */}
			<div className={styles.aside}>
				{/* Header + Component List */}
				<div className={styles.content}>
					{/* Header */}
					<div className={styles.header}>
						<div className=''>SKA-UI</div>
					</div>
					<div className={styles.buttonGroup}>
						<div className={styles.button}>
							<Button size='md' icon={<SiGithub className='h-6 w-6' />}>
								GitHub
							</Button>
						</div>
						<div className={styles.button}>
							<Button
								size='md'
								type='secondary'
								icon={<FiTriangle className='h-6 w-6' />}
							>
								skagur.dev
							</Button>
						</div>
					</div>
				</div>

				{/* Component List */}
				<div className={styles.components}>
					<ul className={styles.componentList}>
						{Array.from(Array(24).keys()).map((i) => (
							<li className={styles.component} key='i'>
								Component {i}
							</li>
						))}
					</ul>
				</div>
			</div>
		</aside>
	)
}
