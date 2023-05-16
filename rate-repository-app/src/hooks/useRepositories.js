import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy, searchKeyword) => {
	let orderDirection = "DESC";
	let orderByFinal = orderBy === "CREATED_AT" ? orderBy : "RATING_AVERAGE";
	if (orderBy === "RATING_AVERAGE_ASC") {
		orderDirection = "ASC";
	}

	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
		variables: {
			orderBy: orderByFinal,
			orderDirection: orderDirection,
			searchKeyword: searchKeyword,
		},
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
