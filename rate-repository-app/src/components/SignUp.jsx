import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";

import Button from "./Button";
import FormikTextInput from "./FormikTextInput";

import { themeStyles } from "../theme";
import Constants from "expo-constants";

import useCreateUser from "../hooks/useCreateUser";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
	container: {
		padding: Constants.statusBarHeight / 2,
		backgroundColor: "#fff",
	},
	inputContainer: {
		paddingBottom: Constants.statusBarHeight / 2,
	},
});

const SignUpForm = ({ onSubmit }) => {
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
			<View style={styles.inputContainer}>
				<FormikTextInput
					name="passwordConfirmation"
					placeholder="Confirm password"
					secureTextEntry={true}
				/>
			</View>
			<Button
				text="Sign up"
				style={themeStyles.buttonBlue}
				stylePressed={themeStyles.buttonBluePressed}
				onPress={onSubmit}
			/>
		</View>
	);
};

export const SignUpContainer = ({ onSubmit }) => {
	const validationSchema = yup.object().shape({
		username: yup
			.string()
			.required("Username is required")
			.min(1, "Username must be atleast 1 character long")
			.max(30, "Username can't be more than 30 characters long."),
		password: yup
			.string()
			.required("Password is required")
			.min(5, "Password must be atleast 5 characters long")
			.max(50, "Password can't be more than 50 characters long."),
		passwordConfirmation: yup
			.string()
			.required("Password confirmation is required")
			.oneOf(
				[yup.ref("password")],
				"Password confirmation doesn't match the password"
			),
	});

	const initialValues = {
		username: "",
		password: "",
		passwordConfirmation: "",
	};

	return (
		<View>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={validationSchema}
			>
				{({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
			</Formik>
		</View>
	);
};

const SignUp = () => {
	const [createUser] = useCreateUser();
	const [signIn] = useSignIn();
	const navigate = useNavigate();

	const onSubmit = async (values) => {
		const { username, password } = values;

		try {
			const { data } = await createUser({ username, password });
			console.log("SignUp.jsx data:", data);

			try {
				const { data } = await signIn({ username, password });
				console.log("SignUp.jsx data (after signing in):", data);
				navigate("/");
			} catch (e) {
				console.log("SignIn.jsx SignIn() error:", e);
			}
		} catch (e) {
			console.log("SignUp.jsx SignUp() error:", e);
		}
	};

	return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
