import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
	const [mutate, result] = useMutation(AUTHENTICATE);

	const signIn = async ({ username, password }) => {
		const payload = await mutate({
			variables: { username, password },
		});

		return payload;
	};

	return [signIn, result];
};

export default useSignIn;
