const theme = {
	colors: {
		grayLight: "#e1e4e8",
		grayMid: "#828282",
		primary: "#0366d6",
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

export const themeStyles = {
	buttonBlue: {
		color: "#fff",
		backgroundColor: theme.colors.primary,
		padding: 10,
		borderRadius: 5,
		textAlign: "center",
		fontSize: theme.fontSizes.subheading,
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
