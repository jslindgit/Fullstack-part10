import { Pressable, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
	flexContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-end",
		padding: Constants.statusBarHeight / 2,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.grayMid,
	},
	flexItem: {
		flexGrow: 1,
	},
	flexItem2: {
		flexGrow: 0,
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
			<View style={styles.flexItem}>
				<Pressable onPress={click}>
					<Text color="textLight">Repositories</Text>
				</Pressable>
			</View>
			<Pressable style={styles.flexItem}>
				<Text color="textLight">Asdasd</Text>
			</Pressable>
			<Pressable style={styles.flexItem2}>
				<Text color="textLight">Dasdasdasd</Text>
			</Pressable>
		</View>
	);
};

export default AppBar;
