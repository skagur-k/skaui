import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E2E2E2',
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
					<Text>Section #2</Text>
				</View>
			</Page>
		</Document>
	)
}

export default Resume
