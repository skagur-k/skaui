import { Avatar, InlineCode } from '@skaui/core'
import { NextPage } from 'next'
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi'
import { Container } from '../../components/container'
import { IDE } from '../../components/ide'
import PageLayout from '../../layouts/PageLayout'

const placeholderCode = `<Container>
	<Avatar size="xl"/>
</Container>
`
const placeholderScope = { Avatar, Container }

const sizesCode = `<Container col align="center">
	<Container>
		<Avatar size="xs"/>
		<Avatar size="sm"/>
		<Avatar size="md"/>
		<Avatar size="lg"/>
		<Avatar size="xl"/>
	</Container>
	<Container>
		<Avatar size="xs" src="https://bit.ly/3R08Coq"/>
		<Avatar size="sm" src="https://bit.ly/3A7cQ6J"/>
		<Avatar size="md" src="https://bit.ly/3AacjAT"/>
		<Avatar size="lg" src="https://bit.ly/3wFlV5Z"/>
		<Avatar size="xl" src="https://bit.ly/3wixU95"/>
	</Container>
</Container>
`
const sizesScope = { Avatar, Container }

const nameCode = `<Container>
	<Avatar size="xs" name="NamHyuck Kim"/>
	<Avatar size="sm" name="John Doe"/>
	<Avatar size="md" name="Ian Kim"/>
	<Avatar size="lg" name="Ingyu Choi"/>
	<Avatar size="xl" name="Jisu Kim"/>
</Container>
`
const nameScope = { Avatar, Container }

const iconCode = `
<Container>
	<Avatar size="xs" src="https://bit.ly/3R08Coq" icon={FiFacebook}/>
	<Avatar size="sm" src="https://bit.ly/3A7cQ6J" icon={FiFacebook}/>
	<Avatar size="md" src="https://bit.ly/3AacjAT" icon={FiTwitter}/>
	<Avatar size="lg" src="https://bit.ly/3wFlV5Z" icon={FiGithub}/>
	<Avatar size="xl" src="https://bit.ly/3wixU95" icon={FiFacebook}/>
</Container>
`
const iconScope = { Avatar, Container, FiGithub, FiFacebook, FiTwitter }

const groupCode = `<Container col align="center">
	<Avatar.Group max={3} size='xs'>
		<Avatar src="https://bit.ly/3R08Coq"/>
		<Avatar src="https://bit.ly/3A7cQ6J"/>
		<Avatar src="https://bit.ly/3AacjAT"/>
		<Avatar src="https://bit.ly/3wFlV5Z"/>
		<Avatar src="https://bit.ly/3wixU95"/>
	</Avatar.Group>
	<Avatar.Group max={3} size='sm'>
		<Avatar src="https://bit.ly/3R08Coq"/>
		<Avatar src="https://bit.ly/3A7cQ6J"/>
		<Avatar src="https://bit.ly/3AacjAT"/>
		<Avatar src="https://bit.ly/3wFlV5Z"/>
		<Avatar src="https://bit.ly/3wixU95"/>
	</Avatar.Group>
	<Avatar.Group max={3} size='md'>
		<Avatar src="https://bit.ly/3R08Coq"/>
		<Avatar src="https://bit.ly/3A7cQ6J"/>
		<Avatar src="https://bit.ly/3AacjAT"/>
		<Avatar src="https://bit.ly/3wFlV5Z"/>
		<Avatar src="https://bit.ly/3wixU95"/>
	</Avatar.Group>
	<Avatar.Group max={3} size='lg'>
		<Avatar src="https://bit.ly/3R08Coq"/>
		<Avatar src="https://bit.ly/3A7cQ6J"/>
		<Avatar src="https://bit.ly/3AacjAT"/>
		<Avatar src="https://bit.ly/3wFlV5Z"/>
		<Avatar src="https://bit.ly/3wixU95"/>
	</Avatar.Group>
	<Avatar.Group max={3} size='xl'>
		<Avatar src="https://bit.ly/3R08Coq"/>
		<Avatar src="https://bit.ly/3A7cQ6J"/>
		<Avatar src="https://bit.ly/3AacjAT"/>
		<Avatar src="https://bit.ly/3wFlV5Z"/>
		<Avatar src="https://bit.ly/3wixU95"/>
	</Avatar.Group>
</Container>
`
const groupScope = { Avatar, Container }

const ButtonPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<h1 className='text-5xl font-black'>Avatar</h1>
				<h3 className='text-xl font-medium text-neutral-400'>
					A component that represents a user or a team. Stacked avatars
					represent a group of people.
				</h3>
				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Avatar Placeholder</h2>
					<IDE code={placeholderCode} scope={placeholderScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Sizes</h2>
					<h3 className='text-lg text-neutral-400'>
						Different sized avatars. Images can be provided with{' '}
						<InlineCode>src</InlineCode> prop.
					</h3>
					<IDE code={sizesCode} scope={sizesScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Avatar Group</h2>
					<h3 className='text-lg text-neutral-400'>
						Avatars can be collelcted into groups. Maximum number of avatars can
						be set with <InlineCode>max</InlineCode> prop.
					</h3>
					<h3 className='text-lg text-neutral-400'>
						Size of the avatar group can be set with{' '}
						<InlineCode>size</InlineCode> prop.
					</h3>
					<IDE code={groupCode} scope={groupScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Named Avatars</h2>
					<h3 className='text-lg text-neutral-400'>
						Avatars without picture can have <InlineCode>name</InlineCode> prop
						to display initials.
					</h3>
					<IDE code={nameCode} scope={nameScope} />
				</div>

				{/* Section */}
				<div className='mt-16 flex flex-col gap-8'>
					<h2 className='text-4xl font-bold'>Avatar with icon</h2>
					<h3 className='text-lg text-neutral-400'>
						Avatars can have icons by setting <InlineCode>icon</InlineCode>{' '}
						prop.
					</h3>
					<IDE code={iconCode} scope={iconScope} />
				</div>
			</div>
		</PageLayout>
	)
}

export default ButtonPage
