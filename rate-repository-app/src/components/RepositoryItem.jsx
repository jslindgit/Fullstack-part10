import { Text, View } from 'react-native';

const RepositoryItem = ({repository}) => {
	return (
		<View>
			<Text>Full name: {repository.fullName}</Text>
		</View>
	)
}

export default RepositoryItem;