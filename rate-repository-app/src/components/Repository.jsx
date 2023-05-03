import { useParams } from "react-router-native";
import { View } from "react-native";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";

const Repository = () => {
	const id = useParams().id;

	return (
		<View>
			<Text>{id}</Text>
		</View>
	);
};

export default Repository;
