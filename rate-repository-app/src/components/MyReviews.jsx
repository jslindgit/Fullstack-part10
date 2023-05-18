import { FlatList, StyleSheet, View } from "react-native";

import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

import ReviewItem from "./ReviewItem";
import Text from "./Text";

const separatorStyles = StyleSheet.create({
	separator: {
		height: 10,
	},
});

const ItemSeparator = () => <View style={separatorStyles.separator} />;

const MyReviews = () => {
	const { data, error, loading } = useQuery(ME, {
		fetchPolicy: "cache-and-network",
		variables: { includeReviews: true },
	});

	if (error) {
		console.log("AppBar.jsx error:", error);
	}
	if (loading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	const reviews = data.me.reviews.edges.map((r) => r.node);

	return (
		<FlatList
			data={reviews}
			ItemSeparatorComponent={ItemSeparator}
			renderItem={({ item }) => <ReviewItem review={item} isMyReview={true} />}
			keyExtractor={({ id }) => id}
		/>
	);
};

export default MyReviews;
