import { useParams } from "react-router-native";
import { FlatList, StyleSheet, View } from "react-native";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";
import styles from "../containerStyles";
import { themeStyles } from "../theme";

const separatorStyles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={separatorStyles.separator} />;

const RepositoryInfo = ({ repository }) => {
	return <RepositoryItem repository={repository} showButton={true} />;
};

const ReviewItem = ({ review }) => {
	return (
		<View style={styles.container}>
			<View style={themeStyles.tabBlue}>
				<Text fontWeight="bold" style={styles.textTab}>
					{review.rating}
				</Text>
			</View>
			<Text fontWeight="bold" style={styles.text}>
				{review.user.username}
			</Text>
			<Text style={styles.text}>{review.createdAt}</Text>
			<Text>{review.text}</Text>
		</View>
	);
};

const Repository = () => {
	const id = useParams().id;

	const data = useRepository(id);

	if (!data || data.length === 0) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	const repository = data.repository;
	const reviews = repository.reviews.edges.map((r) => r.node);

	return (
		<FlatList
			data={reviews}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
		/>
	);

	//return <RepositoryItem repository={data.repository} showButton={true} />;
};

export default Repository;
