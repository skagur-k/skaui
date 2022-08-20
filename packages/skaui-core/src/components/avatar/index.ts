import React from 'react'
import _Avatar from './Avatar'
import { AvatarProps } from './Avatar.types'
import AvatarGroup from './AvatarGroup'

interface Avatar extends React.ForwardRefExoticComponent<AvatarProps> {
	Group: typeof AvatarGroup
}

const Avatar = _Avatar as Avatar

Avatar.Group = AvatarGroup

export { Avatar }
