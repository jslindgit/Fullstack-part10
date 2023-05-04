import { FlatList, Pressable, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={styles.separator} />;

const repoClicked = (item, navigate) => {
	navigate("/repository/" + item.id);
};

const renderRepositoryItem = (item, navigate) => {
	return (
		<Pressable onPress={() => repoClicked(item, navigate)}>
			<RepositoryItem repository={item} />
		</Pressable>
	);
};

export const RepositoryListContainer = ({ repositories }) => {
	const navigate = useNavigate();

	// Get the nodes from the edges array:
	const repositoryNodes = repositories
		? repositories.edges.map((edge) => edge.node)
		: [];

	return (
		<FlatList
			data={repositoryNodes}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => renderRepositoryItem(item, navigate)}
			keyExtractor={(item) => item.id}
		/>
	);
};

const RepositoryList = () => {
	const { repositories } = useRepositories();

	return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
