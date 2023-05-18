import { Image, View } from "react-native";
import * as Linking from "expo-linking";

import Button from "./Button";
import Text from "./Text";
import { themeStyles } from "../theme";
import styles from "../containerStyles";

export const roundCount = (value) => {
	return value >= 1000
		? (Math.round((value / 1000) * 10) / 10).toString() + "k"
		: value;
};

const BottomInfo = ({ flexStyle, title, value }) => {
	return (
		<View style={styles.flexVertical}>
			<View testID={title} style={flexStyle}>
				<Text style={{ ...styles.text, alignSelf: "center" }} fontWeight="bold">
					{roundCount(value)}
				</Text>
				<Text style={{ ...styles.text, alignSelf: "center" }}>{title}</Text>
			</View>
		</View>
	);
};

const githubButton = (showButton, repository) => {
	if (showButton && repository.url) {
		return (
			<Button
				text="Open in GitHub"
				style={themeStyles.buttonBlue}
				stylePressed={themeStyles.buttonBluePressed}
				onPress={() => {
					Linking.openURL(repository.url, "_blank");
				}}
			/>
		);
	} else return <></>;
};

const RepositoryItem = ({ repository, showButton = false }) => {
	return (
		<View testID="repositoryItem" style={styles.container}>
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
			{githubButton(showButton, repository)}
		</View>
	);
};

export default RepositoryItem;
