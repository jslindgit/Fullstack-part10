import { StyleSheet } from "react-native";

//import Text from "./components/Text";
import theme from "./theme";
//import { themeStyles } from "theme";

const baseTextStyle = {
	fontSize: theme.fontSizes.subheading,
};

const containerStyles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		padding: 15,
	},
	flexHorizontal: {
		display: "flex",
		flexDirection: "row",
	},
	flexHorizontalStretch: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "flex-end",
	},
	flexVertical: {
		display: "flex",
		flexDirection: "column",
		paddingLeft: 15,
	},
	flexItem: {
		flexGrow: 1,
		alignContent: "center",
		justifyContent: "center",
	},
	flexItem2: {
		flexGrow: 0,
		alignContent: "center",
		justifyContent: "center",
	},
	ownerAvatar: {
		width: 50,
		height: 50,
	},
	text: {
		paddingBottom: 10,
		...baseTextStyle,
	},
	textTab: {
		color: "#fff",
		...baseTextStyle,
	},
	textGitHub: {
		color: "#fff",
		fontSize: 30,
	},
});

export default containerStyles;
