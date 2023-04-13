import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { useAuthStorage } from "./useAuthStorage";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
	const client = useApolloClient();
	const authStorage = useAuthStorage();
	const [mutate, result] = useMutation(AUTHENTICATE);

	const signIn = async ({ username, password }) => {
		const payload = await mutate({
			variables: { username, password },
		});

		await authStorage.setAccessToken(payload.data.authenticate.accessToken);
		client.resetStore();

		return payload;
	};

	return [signIn, result];
};

export default useSignIn;
