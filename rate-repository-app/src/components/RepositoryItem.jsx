import { Image, Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
	ownerAvatar: {
		width: 50,
		height: 50,
	},
});

const RepositoryItem = ({ repository }) => {
	return (
		<View>
			<Image
				style={styles.ownerAvatar}
				source={{ uri: repository.ownerAvatarUrl }}
			/>
			<Text>Full name: {repository.fullName}</Text>
			<Text>Description: {repository.description}</Text>
			<Text>Language: {repository.language}</Text>
			<Text>Stars: {repository.stargazersCount}</Text>
			<Text>Forks: {repository.forksCount}</Text>
			<Text>Reviews: {repository.reviewCount}</Text>
			<Text>Rating: {repository.ratingAverage}</Text>
		</View>
	);
};

export default RepositoryItem;
