import React from 'react'

export interface KBDProps {
	mac?: boolean
	meta?: boolean
	shift?: boolean
	alt?: boolean
	ctrl?: boolean
	windows?: boolean
	option?: boolean
	fn?: boolean
	enter?: boolean
	deletekey?: boolean
	children?: React.ReactElement | string
}
