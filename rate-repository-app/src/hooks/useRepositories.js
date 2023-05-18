import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (orderBy, searchKeyword, first) => {
	let orderDirection = "DESC";
	let orderByFinal = orderBy === "CREATED_AT" ? orderBy : "RATING_AVERAGE";
	if (orderBy === "RATING_AVERAGE_ASC") {
		orderDirection = "ASC";
	}

	const variables = {
		orderBy: orderByFinal,
		orderDirection: orderDirection,
		searchKeyword: searchKeyword,
		first: first,
	};

	const { data, error, loading, fetchMore, ...result } = useQuery(
		GET_REPOSITORIES,
		{
			fetchPolicy: "cache-and-network",
			variables: variables,
		}
	);

	const handleFetchMore = () => {
		const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repositories.pageInfo.endCursor,
				...variables,
			},
		});
	};

	if (error) {
		console.log("error @ useRepositories.js:", error);
	}

	if (loading) {
		return [];
	}

	return {
		repositories: data?.repositories,
		fetchMore: handleFetchMore,
		loading,
		...result,
	};
};

export default useRepositories;
