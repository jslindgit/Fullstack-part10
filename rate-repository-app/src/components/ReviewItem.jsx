import { View } from "react-native";
import format from "date-fns/format";

import Text from "./Text";
import styles from "../containerStyles";
import { themeStyles } from "../theme";
import theme from "../theme";

const ReviewItem = ({ review }) => {
	return (
		<View style={styles.container}>
			<View style={styles.flexHorizontal}>
				<View style={themeStyles.tabBlue}>
					<Text
						fontWeight="bold"
						style={{
							...styles.textTab,
							fontSize: theme.fontSizes.heading,
						}}
					>
						{review.rating}
					</Text>
				</View>
				<View style={{ paddingLeft: 15 }}>
					<Text fontWeight="bold" style={styles.text}>
						{review.user.username}
					</Text>
					<Text style={styles.text}>
						{format(new Date(review.createdAt), "dd.MM.yyyy")}
					</Text>
					<Text>{review.text}</Text>
				</View>
			</View>
		</View>
	);
};

export default ReviewItem;
