import { ImgHTMLAttributes } from 'react'

interface UseImageProps {
	src?: string
	srcSet?: string
	sizes?: string
	onLoad?(event: React.SyntheticEvent<HTMLImageElement, Event>): void
	onError?(error: string | React.SyntheticEvent<HTMLImageElement, Event>): void
	ignoreFallback?: boolean
	crossOrigin?: ImgHTMLAttributes<any>['crossOrigin']
}

type Status = 'loading' | 'failed' | 'pending' | 'loaded'
type ImageEvent = React.SyntheticEvent<HTMLImageElement, Event>

export type { UseImageProps, Status, ImageEvent }
