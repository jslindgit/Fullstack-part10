import { useParams } from "react-router-native";
import { View } from "react-native";
import Text from "./Text";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const Repository = () => {
	const id = useParams().id;

	const data = useRepository(id);

	if (!data || data.length === 0) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	return <RepositoryItem repository={data.repository} showButton={true} />;
};

export default Repository;
