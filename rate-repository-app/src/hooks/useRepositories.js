import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
	});

	if (error) {
		console.log("error @ useRepositories.js:", error);
	}

	if (loading) {
		return [];
	}
	return data;
};

export default useRepositories;
