import React from 'react'
import { UseImageProps } from '../../hooks/'

interface INativeImageProps {
	htmlWidth?: string | number
	htmlHeight?: string | number
}

interface NativeImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement>,
		INativeImageProps {}

interface IImageProps extends Omit<NativeImageProps, 'onError'> {
	fallbackSrc?: string
	fallback?: React.ReactElement
	loading?: 'eager' | 'lazy'
	ignoreFallback?: boolean
	caption?: string
	as?: React.ElementType
}

interface ImageProps extends UseImageProps, IImageProps {}

export type { NativeImageProps, ImageProps }
