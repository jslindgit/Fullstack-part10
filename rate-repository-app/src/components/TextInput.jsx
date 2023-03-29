import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
	error: {
		borderColor: theme.colors.red,
	},
});

const TextInput = ({ style, error, ...props }) => {
	const textInputStyle = [style];

	const inputStyles = [textInputStyle, error && styles.error];

	return <NativeTextInput style={inputStyles} {...props} />;
};

export default TextInput;
