import { createContext, useContext } from 'react'
import { Language } from './FileViewer.types'

const FileContext = createContext<number>(0)

export interface IFileViewerContextValueProps {
	selectedFile: {
		slug?: string
		content?: string
		language?: Language
	}
	setSelectedFile: Function
}

export const FileViewerContext = createContext<
	IFileViewerContextValueProps | undefined
>(undefined)

export const FileContextProvider = FileContext.Provider
export const useFileTree = () => useContext(FileContext)
export const FileViewerContextProvider = FileViewerContext.Provider
export const useFileViewer = (): IFileViewerContextValueProps => {
	const ctx = useContext(FileViewerContext)
	if (!ctx) {
		throw Error('useFileViewer must be used inside useFileViewerProvider!')
	}
	return ctx
}
