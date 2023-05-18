import { useParams } from "react-router-native";
import { FlatList, StyleSheet, View } from "react-native";

import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import ReviewItem from "./ReviewItem";
import useRepository from "../hooks/useRepository";

const separatorStyles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={separatorStyles.separator} />;

const RepositoryInfo = ({ repository }) => {
	return (
		<View>
			<RepositoryItem repository={repository} showButton={true} />
			<ItemSeparator />
		</View>
	);
};

const Repository = () => {
	const id = useParams().id;

	const { loading, repository, fetchMore } = useRepository(id, 4);

	if (loading || !repository) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}
	const reviews = repository.reviews.edges.map((r) => r.node);

	const onEndReached = () => {
		fetchMore();
	};

	return (
		<FlatList
			data={reviews}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <ReviewItem review={item} />}
			keyExtractor={({ id }) => id}
			ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
			onEndReached={onEndReached}
			onEndReachedThreshold={0.5}
		/>
	);

	//return <RepositoryItem repository={data.repository} showButton={true} />;
};

export default Repository;
