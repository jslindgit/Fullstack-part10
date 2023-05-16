import { Platform } from "react-native";

const theme = {
	colors: {
		grayLight: "#e1e4e8",
		grayMid: "#828282",
		primary: "#0366d6",
		primaryDark: "#004a9e",
		red: "#e70000",
		textLight: "#fff",
		textPrimary: "#24292e",
		textSecondary: "#586069",
	},
	fontSizes: {
		body: 14,
		heading: 24,
		subheading: 16,
	},
	fonts: {
		main: Platform.select({
			android: "Roboto",
			ios: "Arial",
			default: "System",
		}),
	},
	fontWeights: {
		normal: "400",
		bold: "700",
	},
};

const buttonBase = {
	color: "#fff",
	padding: 10,
	borderRadius: 5,
	textAlign: "center",
	fontSize: theme.fontSizes.subheading,
};

export const themeStyles = {
	buttonBlue: {
		...buttonBase,
		backgroundColor: theme.colors.primary,
	},
	buttonBluePressed: {
		...buttonBase,
		backgroundColor: theme.colors.primaryDark,
	},
	input: {
		backgroundColor: "#fff",
		color: theme.colors.textPrimary,
		padding: 10,
		borderColor: theme.colors.grayMid,
		borderRadius: 5,
		borderStyle: "solid",
		borderWidth: 1,
	},
	tabBlue: {
		color: "#fff",
		backgroundColor: theme.colors.primary,
		alignSelf: "flex-start",
		padding: 5,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
	},
};

export default theme;
