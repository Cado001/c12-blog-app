import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Image, ScrollView, SafeAreaView } from 'react-native'
import PostCard from './components/PostCard'

export default function App() {
	const [blogPosts, setBlogPosts] = useState([])
	// useEffect is being called on different lifecycle of the component
	// 1. When component Mounts
	// 2. when component unMounts

	// How to get a component to re-render
	// 1. change state variable
	// 2. change props

	useEffect(() => {
		fetch('http://192.168.10.207:8080')
			.then(res => res.json())
			.then(data => setBlogPosts(data))
			.catch(err => console.error(err))
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View>
				<ScrollView>
					{blogPosts.map((singlePost, index) => {
						return <PostCard singlePost={singlePost} index={index} key={singlePost._id} />
					})}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		// display: 'flex',
		// height: '100%',
		// width: '100%',
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})