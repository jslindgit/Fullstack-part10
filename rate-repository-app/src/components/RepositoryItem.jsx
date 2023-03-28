import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { themeStyles } from "../theme";

const baseTextStyle = {
	fontSize: theme.fontSizes.subheading,
};

const styles = StyleSheet.create({
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
});

const BottomInfo = ({ flexStyle, title, value }) => {
	return (
		<View style={styles.flexVertical}>
			<View style={flexStyle}>
				<Text style={{ ...styles.text, alignSelf: "center" }} fontWeight="bold">
					{value >= 1000 ? Math.round((value / 1000) * 10) / 10 + "k" : value}
				</Text>
				<Text style={{ ...styles.text, alignSelf: "center" }}>{title}</Text>
			</View>
		</View>
	);
};

const RepositoryItem = ({ repository }) => {
	return (
		<View style={styles.container}>
			<View style={styles.flexHorizontal}>
				<Image
					style={styles.ownerAvatar}
					source={{ uri: repository.ownerAvatarUrl }}
				/>
				<View style={styles.flexVertical}>
					<Text fontWeight="bold" style={styles.text}>
						{repository.fullName}
					</Text>
					<Text style={styles.text}>{repository.description}</Text>
					<View style={themeStyles.tabBlue}>
						<Text style={styles.textTab}>{repository.language}</Text>
					</View>
				</View>
			</View>
			<View style={{ ...styles.flexHorizontalStretch, paddingTop: 20 }}>
				<BottomInfo
					flexStyle={styles.flexItem}
					title="Stars"
					value={repository.stargazersCount}
				/>
				<BottomInfo
					flexStyle={styles.flexItem}
					title="Forks"
					value={repository.forksCount}
				/>
				<BottomInfo
					flexStyle={styles.flexItem}
					title="Reviews"
					value={repository.reviewCount}
				/>
				<BottomInfo
					flexStyle={styles.flexItem2}
					title="Rating"
					value={repository.ratingAverage}
				/>
			</View>
		</View>
	);
};

export default RepositoryItem;
