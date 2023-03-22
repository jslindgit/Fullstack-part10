import { Pressable, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		// ...
	},
	// ...
});

const AppBar = () => {
	return (
		<View style={styles.container}>
			<Pressable>Repositories</Pressable>
		</View>
	);
};

export default AppBar;
