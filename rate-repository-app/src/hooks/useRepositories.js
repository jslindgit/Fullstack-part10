import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy) => {
	let orderDirection = "DESC";
	let orderByFinal = orderBy === "CREATED_AT" ? orderBy : "RATING_AVERAGE";
	if (orderBy === "RATING_AVERAGE_ASC") {
		orderDirection = "ASC";
	}

	console.log("orderByFinal:", orderByFinal);
	console.log("orderDirection:", orderDirection);

	const { data, error, loading } = useQuery(GET_REPOSITORIES, {
		fetchPolicy: "cache-and-network",
		variables: { orderBy: orderByFinal, orderDirection: orderDirection },
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
