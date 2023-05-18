import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import useReview from "../hooks/useReview";
import Button from "./Button";
import FormikTextInput from "./FormikTextInput";

import { themeStyles } from "../theme";
import Constants from "expo-constants";

const styles = StyleSheet.create({
	container: {
		padding: Constants.statusBarHeight / 2,
		backgroundColor: "#fff",
	},
	inputContainer: {
		paddingBottom: Constants.statusBarHeight / 2,
	},
});

const ReviewForm = ({ onSubmit }) => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<FormikTextInput
					name="repositoryowner"
					placeholder="Repository owner's GitHub username"
				/>
			</View>
			<View style={styles.inputContainer}>
				<FormikTextInput
					name="repositoryname"
					placeholder="Repository's name"
				/>
			</View>
			<View style={styles.inputContainer}>
				<FormikTextInput name="rating" placeholder="Rating (0-100)" />
			</View>
			<View style={styles.inputContainer}>
				<FormikTextInput
					name="review"
					placeholder="Review"
					multiline={true}
					numberOfLines={10}
				/>
			</View>
			<Button
				text="Create review"
				style={themeStyles.buttonBlue}
				stylePressed={themeStyles.buttonBluePressed}
				onPress={onSubmit}
			/>
		</View>
	);
};

export const ReviewContainer = ({ onSubmit }) => {
	const validationSchema = yup.object().shape({
		repositoryowner: yup.string().required("Repository owner is required"),
		repositoryname: yup.string().required("Repository's name is required"),
		rating: yup
			.number()
			.required("Rating is required")
			.min(0, "Rating must be 0-100")
			.max(100, "Rating must be 0-100"),
		review: yup.string().optional(),
	});

	const initialValues = {
		repositoryowner: "",
		repositoryname: "",
		rating: "",
		review: "",
	};

	return (
		<View>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	);
};

const Review = () => {
	const [createReview] = useReview();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { repositoryowner, repositoryname, rating, review } = values;

		try {
			const numRating = Number(rating);

			const { data } = await createReview({
				ownerName: repositoryowner,
				rating: numRating,
				repositoryName: repositoryname,
				text: review,
			});

			const id = data.createReview.repositoryId;
			navigate("/repository/" + id);
		} catch (e) {
			console.log("Review.jsx Review() error:", e);
		}
	};

	return <ReviewContainer onSubmit={onSubmit} />;
};

export default Review;
