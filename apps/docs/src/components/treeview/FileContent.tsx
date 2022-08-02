import React from 'react'
import styles from './TreeView.module.css'
const FileContent = ({ content }: { content: string }) => {
	return <div className={styles.filecontent}>{content}</div>
}

export default FileContent
