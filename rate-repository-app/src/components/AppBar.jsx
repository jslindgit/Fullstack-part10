import { ScrollView, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

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
	return (
		<View style={styles.flexContainer}>
			<ScrollView horizontal>
				<Link to="/" style={styles.flexItem}>
					<Text color="textLight">Repositories</Text>
				</Link>
				<Link to="/signin" style={styles.flexItem}>
					<Text color="textLight">Sign in</Text>
				</Link>
			</ScrollView>
		</View>
	);
};

export default AppBar;
