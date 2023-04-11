import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = async () => {
	const [mutate, result] = useMutation(AUTHENTICATE, {
		onError: (error) => {
			console.log("useSignIn.js error: ", error.graphQLErrors[0].message);
		},
	});

	const signIn = async ({ username, password }) => {
		console.log("u:", username + password);
		await mutate();
	};

	console.log("useSignIn result:", result);

	return [signIn, result];
};

export default useSignIn;
