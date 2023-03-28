import { Pressable, View } from "react-native-web";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";

const initialValues = {
	username: "",
	password: "",
};

const submit = (values) => {
	console.log(values);
};

const SignInForm = ({ onSubmit }) => {
	return (
		<View>
			<FormikTextInput name="username" placeholder="Username" />
			<FormikTextInput name="password" placeholder="Password" />
			<Pressable onPress={onSubmit}>
				<Text>Submit</Text>
			</Pressable>
		</View>
	);
};

const SignIn = () => {
	const onSubmit = (values) => {
		console.log("onSubmit");
		if (!isNaN(values.username) && !isNaN(values.password)) {
			submit(values);
		}
	};

	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	);
};

export default SignIn;
