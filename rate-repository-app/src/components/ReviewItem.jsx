import { useNavigate } from "react-router-native";
import { Alert, View } from "react-native";
import format from "date-fns/format";

import useDeleteReview from "../hooks/useDeleteReview";

import Button from "./Button";
import Text from "./Text";
import styles from "../containerStyles";
import { themeStyles } from "../theme";
import theme from "../theme";

const header = (review, isMyReview) => {
	return isMyReview === true ? (
		<Text fontWeight="bold" style={styles.text}>
			{review.repository.fullName}
		</Text>
	) : (
		<Text fontWeight="bold" style={styles.text}>
			{review.user.username}
		</Text>
	);
};

const actionButtons = (review, deleteReview) => {
	const navigate = useNavigate();

	const deletePressed = async () => {
		try {
			const { data } = await deleteReview({ reviewId: review.id });

			console.log("ReviewItem.jsx data:", data);

			navigate("/");
			navigate("/myreviews");
		} catch (e) {
			console.log("ReviewItem.jsx error:", e);
		}
	};

	return (
		<View style={{ ...styles.flexHorizontal, paddingTop: 15 }}>
			<View>
				<Button
					text="View repository"
					style={themeStyles.buttonBlue}
					stylePressed={themeStyles.buttonBluePressed}
					onPress={() => {
						navigate("/repository/" + review.repository.id);
					}}
				/>
			</View>
			<View style={{ paddingLeft: 15 }}>
				<Button
					text="Delete review"
					style={themeStyles.buttonRed}
					stylePressed={themeStyles.buttonRedPressed}
					onPress={() => {
						Alert.alert(
							"Delete review",
							"Are you sure you want to delete this review?",
							[
								{
									text: "CANCEL",
									onPress: () => console.log("Cancel pressed"),
									style: "cancel",
								},
								{
									text: "DELETE",
									onPress: () => deletePressed(),
								},
							]
						);
					}}
				/>
			</View>
		</View>
	);
};

const ReviewItem = ({ review, isMyReview = false }) => {
	const [deleteReview] = useDeleteReview();

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
					{header(review, isMyReview)}
					<Text style={styles.text}>
						{format(new Date(review.createdAt), "dd.MM.yyyy")}
					</Text>
					<Text>{review.text}</Text>
				</View>
			</View>
			{isMyReview ? actionButtons(review, deleteReview) : null}
		</View>
	);
};

export default ReviewItem;
