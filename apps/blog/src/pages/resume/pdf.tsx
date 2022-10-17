import { PDFViewer } from '@react-pdf/renderer'
import { useEffect, useState } from 'react'
import Resume from '../../helpers/generateResumePDF'

const ResumePage = () => {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(typeof window !== 'undefined')
	}, [])
	return isBrowser ? (
		<PDFViewer width={'100%'} height={'100%'}>
			<Resume />
		</PDFViewer>
	) : null
}

export default ResumePage
