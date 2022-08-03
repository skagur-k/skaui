import { createContext } from 'react'
import { useContext } from 'react'

export interface IIconContext {
	size: number
}

const IconContext = createContext<IIconContext>({
	size: 8,
})

export const IconContextProvider = IconContext.Provider

export const useIcon = (): IIconContext => {
	const ctx = useContext(IconContext)
	if (!ctx) {
		throw Error('useIconSize must be used inside IconContextProvider.')
	}

	return ctx
}
