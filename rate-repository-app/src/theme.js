const theme = {
	colors: {
		grayLight: "#e1e4e8",
		grayMid: "#828282",
		primary: "#0366d6",
		primaryDark: "#0056b7",
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
		main: "System",
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
	tabBlue: {
		color: "#fff",
		backgroundColor: theme.colors.primary,
		alignSelf: "flex-start",
		padding: 5,
		borderRadius: 5,
	},
};

export default theme;
