import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";
import { useAuthStorage } from "./useAuthStorage";

const useDeleteReview = () => {
	const authStorage = useAuthStorage();

	const [mutate, result] = useMutation(DELETE_REVIEW);

	const deleteReview = async ({ reviewId }) => {
		const token = await authStorage.getAccessToken();

		const payload = await mutate({
			variables: {
				deleteReviewId: reviewId,
			},
			headers: { Authorization: "Bearer " + token },
		});

		return payload;
	};

	return [deleteReview, result];
};

export default useDeleteReview;
