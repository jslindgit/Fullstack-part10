import { Pressable, Text } from "react-native";

const Button = ({ text, style, stylePressed, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			{({ pressed }) => (
				<Text style={pressed ? stylePressed : style}>{text}</Text>
			)}
		</Pressable>
	);
};

export default Button;
