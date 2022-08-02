import React, { createContext, useContext } from 'react'

const TreeContext = createContext<number>(0)

export interface ITreeViewContextValueProps {
	selectedFile: {
		slug?: string
		content?: string
	}
	fileOpened: boolean
	setSelectedFile: Function
}

export const TreeViewContext = createContext<
	ITreeViewContextValueProps | undefined
>(undefined)

export const TreeContextProvider = TreeContext.Provider
export const useTree = () => useContext(TreeContext)
export const TreeViewContextProvider = TreeViewContext.Provider
export const useTreeView = (): ITreeViewContextValueProps => {
	const ctx = useContext(TreeViewContext)
	if (!ctx) {
		throw Error('useTreeView must be used inside TreeViewContextProvider!')
	}
	return ctx
}
