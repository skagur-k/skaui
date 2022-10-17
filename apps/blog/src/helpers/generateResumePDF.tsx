import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#fafafa',
		color: '#222222',
	},
	section: {
		margin: 0,
		padding: 0,
	},
})

const Resume = () => {
	return (
		<Document>
			<Page size='A4' style={styles.page}>
				<View style={styles.section}>
					<Text>Section #1</Text>
				</View>
				<View style={styles.section}>
					<Text>Section #3</Text>
				</View>
			</Page>
		</Document>
	)
}

export default Resume
