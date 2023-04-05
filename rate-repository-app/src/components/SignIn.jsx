import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

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

const initialValues = {
	username: "",
	password: "",
};

const validationSchema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup.string().required("Password is required"),
});

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
				<FormikTextInput
					name="password"
					placeholder="Password"
					secureTextEntry={true}
				/>
			</View>
			<Button
				text="Sign in"
				style={themeStyles.buttonBlue}
				stylePressed={themeStyles.buttonBluePressed}
				onPress={onSubmit}
			/>
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
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	);
};

export default SignIn;