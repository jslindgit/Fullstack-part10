import React from "react";
import { FlatList, Pressable, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { useState } from "react";

import { Picker } from "@react-native-picker/picker";
import { useDebounce } from "use-debounce";

import TextInput from "./TextInput";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { themeStyles } from "../theme";

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

const Filter = ({ setSearchKeyword }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				onChangeText={(value) => searchInputOnChage(value, setSearchKeyword)}
				style={themeStyles.input}
				placeholder="Filter"
			/>
		</View>
	);
};

const OrderBy = ({ orderBy, setOrderBy }) => {
	return (
		<Picker
			selectedValue={orderBy}
			onValueChange={(itemValue) => setOrderBy(itemValue)}
			style={themeStyles.input}
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
	);
};

const RepositoryListHeader = ({ orderBy, setOrderBy, setSearchKeyword }) => {
	return (
		<>
			<Filter setSearchKeyword={setSearchKeyword} />
			<OrderBy orderBy={orderBy} setOrderBy={setOrderBy} />
		</>
	);
};

export class RepositoryListContainer extends React.Component {
	renderHeader = () => {
		const props = this.props;

		return (
			<RepositoryListHeader
				orderBy={props.orderBy}
				setOrderBy={props.setOrderBy}
				setSearchKeyword={props.setSearchKeyword}
			/>
		);
	};

	render() {
		const props = this.props;

		// Get the nodes from the edges array:
		const repositoryNodes = props.repositories
			? props.repositories.edges.map((edge) => edge.node)
			: [];

		return (
			<FlatList
				data={repositoryNodes}
				ItemSeparatorComponent={ItemSeparator}
				renderItem={({ item }) => renderRepositoryItem(item, props.navigate)}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={this.renderHeader}
				onEndReached={props.onEndReached}
				onEndReachedThreshold={0.5}
			/>
		);
	}
}

const RepositoryList = () => {
	const navigate = useNavigate();

	const [orderBy, setOrderBy] = useState("CREATED_AT");
	const [searchKeyword, setSearchKeyword] = useState("");
	const [debouncedSearchKeyword] = useDebounce(searchKeyword, 500);

	const { repositories, fetchMore } = useRepositories(
		orderBy,
		debouncedSearchKeyword,
		8
	);

	const onEndReached = () => {
		fetchMore();
	};

	return (
		<RepositoryListContainer
			repositories={repositories}
			navigate={navigate}
			orderBy={orderBy}
			setOrderBy={setOrderBy}
			setSearchKeyword={setSearchKeyword}
			onEndReached={onEndReached}
		/>
	);
};

export default RepositoryList;
