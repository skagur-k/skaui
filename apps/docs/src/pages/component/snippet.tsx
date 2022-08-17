import { Snippet } from '@skaui/core'
import { NextPage } from 'next'
import PageLayout from '../../layouts/PageLayout'

const SnippetPage: NextPage = () => {
	return (
		<PageLayout>
			<Snippet text={['hello']} />
		</PageLayout>
	)
}

export default SnippetPage
