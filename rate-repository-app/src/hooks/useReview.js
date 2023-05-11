import { useMutation } from "@apollo/client";
//import { useApolloClient } from "@apollo/client";

import { useAuthStorage } from "./useAuthStorage";
import { CREATEREVIEW } from "../graphql/mutations";

const useReview = () => {
	//const client = useApolloClient();
	const authStorage = useAuthStorage();
	const [mutate, result] = useMutation(CREATEREVIEW);

	const createReview = async ({ ownerName, rating, repositoryName, text }) => {
		const token = await authStorage.getAccessToken();

		const payload = await mutate({
			variables: { ownerName, rating, repositoryName, text },
			headers: { Authorization: "Bearer " + token },
		});

		return payload;
	};

	return [createReview, result];
};

export default useReview;
