import { Avatar, AvatarGroup, Image } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../layouts/PageLayout'

const AvatarPage: NextPage = () => {
	return (
		<PageLayout>
			<div className='flex items-center gap-5'>
				<AvatarGroup size='lg' max={3}>
					<Avatar name='Nam Hyuck' />
					<Avatar
						name='Nam Hyuck'
						src='https://www.stockvault.net/data/2019/03/06/261776/thumb16.jpg'
					/>
					<Avatar
						name='Nam Hyuck'
						src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
					/>
					<Avatar
						name='Nam Hyuck'
						src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
					/>
					<Avatar
						name='Nam Hyuck'
						src='https://i.pinimg.com/640x/26/12/73/261273da88b3732c008a871d0284642b.jpg'
					/>
					<Avatar
						bordered
						name='Nam Hyuck'
						src='https://upload.wikimedia.org/wikipedia/commons/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png'
					/>
					<Avatar
						bordered
						name='Nam Hyuck'
						src='https://img.sbs.co.kr/newsnet/etv/upload/2020/10/28/30000654805_1280.jpg'
					/>
					<Avatar bordered size='xl' name='Nam Hyuck' />
				</AvatarGroup>
				<AvatarGroup size='md' max={3}>
					<Avatar name='Nam Hyuck' />
					<Avatar
						name='Nam Hyuck'
						src='https://www.stockvault.net/data/2019/03/06/261776/thumb16.jpg'
					/>
					<Avatar
						name='Nam Hyuck'
						src='https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000'
					/>
					<Avatar
						name='Nam Hyuck'
						src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80'
					/>
					<Avatar
						name='Nam Hyuck'
						src='https://i.pinimg.com/640x/26/12/73/261273da88b3732c008a871d0284642b.jpg'
					/>
					<Avatar
						bordered
						name='Nam Hyuck'
						src='https://upload.wikimedia.org/wikipedia/commons/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png'
					/>
					<Avatar
						bordered
						name='Nam Hyuck'
						src='https://img.sbs.co.kr/newsnet/etv/upload/2020/10/28/30000654805_1280.jpg'
					/>
					<Avatar bordered name='Nam Hyuck' />
				</AvatarGroup>
				<Image
					caption='Starlight'
					alt='Starlight'
					src='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg'
				/>
			</div>
		</PageLayout>
	)
}

export default AvatarPage
