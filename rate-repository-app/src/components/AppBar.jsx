import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import { useAuthStorage } from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

import Constants from "expo-constants";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
	flexContainer: {
		display: "flex",
		flexDirection: "row",
		padding: Constants.statusBarHeight / 2,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.grayMid,
	},
	flexItem: {
		flexGrow: 0,
		paddingRight: 30,
	},
	text: {
		color: theme.colors.textLight,
	},
});

const AppBar = () => {
	const authStorage = useAuthStorage();
	const apolloClient = useApolloClient();

	const { data, error, loading } = useQuery(ME, {
		fetchPolicy: "cache-and-network",
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

	const signOut = async () => {
		await authStorage.removeAccessToken();
		apolloClient.resetStore();
	};

	const signIn =
		data.me !== null ? (
			<Text color="textLight" onPress={signOut}>
				Sign out ({data.me.username})
			</Text>
		) : (
			<Link to="/signin" style={styles.flexItem}>
				<Text color="textLight">Sign in</Text>
			</Link>
		);

	return (
		<View style={styles.flexContainer}>
			<ScrollView horizontal>
				<Link to="/" style={styles.flexItem}>
					<Text color="textLight">Repositories</Text>
				</Link>
				{signIn}
			</ScrollView>
		</View>
	);
};

export default AppBar;
