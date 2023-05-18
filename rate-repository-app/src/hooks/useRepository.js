import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id, first) => {
	const variables = { repositoryId: id, first: first };

	const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
		fetchPolicy: "cache-and-network",
		variables: variables,
	});

	const handleFetchMore = () => {
		const canFetchMore =
			!loading && data?.repository.reviews.pageInfo.hasNextPage;

		if (!canFetchMore) {
			return;
		}

		fetchMore({
			variables: {
				after: data.repository.reviews.pageInfo.endCursor,
				...variables,
			},
		});
	};

	if (error) {
		console.log("error @ useRepository.js:" + error);
	}

	return { loading, repository: data?.repository, fetchMore: handleFetchMore };
};

export default useRepository;
