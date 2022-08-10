import React from 'react'

interface SharedProps {
	children?: React.ReactNode | string
	className?: string
}

export interface TextProps
	extends SharedProps,
		React.HTMLAttributes<HTMLParagraphElement> {
	size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'
	weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
	transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'normal'
	align?: 'left' | 'center' | 'right'
	truncate?: number | boolean
	wrap?: boolean
	color?: string
	as?: React.ElementType
}

export interface InlineCodeProps extends SharedProps {}
export interface CodeBlockProps extends SharedProps {}
export interface ListProps extends SharedProps {}
export interface LIProps extends SharedProps {}
