import { View, Text, StyleSheet, Image } from 'react-native'

export default function PostCard({ singlePost, index }) {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.headerContainer}>
				<Image style={styles.avatarImage} source={{ uri: `https://randomuser.me/api/portraits/women/${index}.jpg` }} />
				<Text> {singlePost.title}</Text>
			</View>
			<Image style={styles.image} source={{ uri: `https://source.unsplash.com/random/${index}` }} />
			<Text>{singlePost.content}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer: {
		marginVertical: 20,
		paddingVertical: 20,
		borderBottomColor: '#999',
		borderBottomWidth: 1,
	},
	headerContainer: {
		flexDirection: 'row',
		marginHorizontal: 20,
	},
	avatarImage: {
		borderRadius: 100,
		marginRight: 10,
		width: 50,
		height: 50,
	},
	image: {
		flex: 1,
		aspectRatio: 1,
		width: '100%',
		marginVertical: 20,
	},
})