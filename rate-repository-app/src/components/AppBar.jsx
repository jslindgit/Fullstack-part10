import { Pressable, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.bgDark,
	},
	flexContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.bgDark,
	},
	flexItem: {
		flexGrow: 1,
	},
	text: {
		color: theme.colors.textLight,
	},
});

const click = () => {
	console.log("click");
};

const AppBar = () => {
	return (
		<View style={styles.flexContainer}>
			<Pressable onPress={click}>
				<Text color="textLight">Repositories</Text>
			</Pressable>
			<Pressable style={styles.flexItem}>
				<Text color="textLight">Asdasd</Text>
			</Pressable>
			<Pressable style={styles.flexItem}>
				<Text color="textLight">Dasdasdasd</Text>
			</Pressable>
		</View>
	);
};

export default AppBar;
