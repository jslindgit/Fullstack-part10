import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";

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

const initialValues = {
	username: "",
	password: "",
};

const submit = (values) => {
	console.log(values);
};

const SignInForm = ({ onSubmit }) => {
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<FormikTextInput name="username" placeholder="Username" />
			</View>
			<View style={styles.inputContainer}>
				<FormikTextInput name="password" placeholder="Password" />
			</View>
			<Pressable onPress={onSubmit}>
				<Text style={themeStyles.buttonBlue}>Sign in</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const onSubmit = (values) => {
		if (values.username && values.password) {
			submit(values);
		}
	};

	return (
		<View>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	);
};

export default SignIn;
