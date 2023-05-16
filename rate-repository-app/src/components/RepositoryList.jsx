import { FlatList, Pressable, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { useState } from "react";

import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";

import TextInput from "./TextInput";
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

const searchInputOnChage = (newValue, setSearchKeyword) => {
	setSearchKeyword(newValue);
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
	const [orderBy, setOrderBy] = useState("CREATED_AT");
	const [searchKeyword, setSearchKeyword] = useState("");
	const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

	const { repositories } = useRepositories(orderBy, debouncedSearchKeyword);

	return (
		<>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={(value) => searchInputOnChage(value, setSearchKeyword)}
				/>
			</View>
			<Picker
				selectedValue={orderBy}
				onValueChange={(itemValue, itemIndex) => setOrderBy(itemValue)}
			>
				<Picker.Item label="Latest repositories" value="CREATED_AT" />
				<Picker.Item
					label="Highest rated repositories"
					value="RATING_AVERAGE_DESC"
				/>
				<Picker.Item
					label="Lowest rated repositories"
					value="RATING_AVERAGE_ASC"
				/>
			</Picker>

			<RepositoryListContainer repositories={repositories} />
		</>
	);
};

export default RepositoryList;
