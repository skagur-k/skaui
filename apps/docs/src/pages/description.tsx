import { Text } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const Accordion: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex flex-col gap-6'>
				<div className='flex flex-col gap-2'>
					<Text weight='100'>The Evil Rabbit Jumps...</Text>
					<Text weight='200'>The Evil Rabbit Jumps...</Text>
					<Text weight='300'>The Evil Rabbit Jumps...</Text>
					<Text weight='400'>The Evil Rabbit Jumps...</Text>
					<Text weight='500'>The Evil Rabbit Jumps...</Text>
					<Text weight='600'>The Evil Rabbit Jumps...</Text>
					<Text weight='700'>The Evil Rabbit Jumps...</Text>
					<Text weight='800'>The Evil Rabbit Jumps...</Text>
				</div>
				<div className='flex flex-col gap-2'>
					<Text size='xs'>The Evil Rabbit Jumps...</Text>
					<Text size='sm'>The Evil Rabbit Jumps...</Text>
					<Text size='base'>The Evil Rabbit Jumps...</Text>
					<Text size='lg'>The Evil Rabbit Jumps...</Text>
					<Text size='xl'>The Evil Rabbit Jumps...</Text>
					<Text size='2xl'>The Evil Rabbit Jumps...</Text>
					<Text size='3xl'>The Evil Rabbit Jumps...</Text>
					<Text size='4xl'>The Evil Rabbit Jumps...</Text>
					<Text align='center' size='5xl'>
						The Evil Rabbit Jumps...
					</Text>
					<Text size='5xl' truncate={4}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
						tempore porro ut iste repellendus deleniti molestias soluta
						veritatis ipsam excepturi temporibus numquam omnis, maiores possimus
						beatae, error facere modi enim!
					</Text>
				</div>
			</div>
		</PageLayout>
	)
}

export default Accordion
