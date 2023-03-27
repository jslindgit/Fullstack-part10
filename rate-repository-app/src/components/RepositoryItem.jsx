import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const baseTextStyle = {
	fontSize: theme.fontSizes.subheading,
	paddingBottom: 10,
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
	},
	flexItem2: {
		flexGrow: 0,
	},
	ownerAvatar: {
		width: 50,
		height: 50,
	},
	text: baseTextStyle,
	languageTab: {
		color: "#fff",
		backgroundColor: theme.colors.primary,
		alignSelf: "center",
		...baseTextStyle,
	},
});

const BottomInfo = ({ flexStyle, title, value }) => {
	return (
		<View style={styles.flexVertical}>
			<View style={flexStyle}>
				<Text style={styles.text} fontWeight="bold">
					{value >= 1000 ? Math.round((value / 1000) * 10) / 10 + "k" : value}
				</Text>
				<Text style={styles.text}>{title}</Text>
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
					<Text style={styles.languageTab}>{repository.language}</Text>
				</View>
			</View>
			<View style={styles.flexHorizontalStretch}>
				<BottomInfo
					style={styles.flexItem}
					flexStyle={styles.flexItem}
					title="Stars"
					value={repository.stargazersCount}
				/>
				<BottomInfo
					style={styles.flexItem}
					flexStyle={styles.flexItem}
					title="Forks"
					value={repository.forksCount}
				/>
				<BottomInfo
					style={styles.flexItem}
					flexStyle={styles.flexItem}
					title="Reviews"
					value={repository.reviewCount}
				/>
				<BottomInfo
					style={styles.flexItem2}
					flexStyle={styles.flexItem2}
					title="Rating"
					value={repository.ratingAverage}
				/>
			</View>
		</View>
	);
};

export default RepositoryItem;
