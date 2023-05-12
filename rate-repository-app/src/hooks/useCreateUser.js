import { useMutation } from "@apollo/client";

import { CREATEUSER } from "../graphql/mutations";

const useCreateUser = () => {
	const [mutate, result] = useMutation(CREATEUSER);

	const createUser = async ({ username, password }) => {
		console.log("useCreateUser params:", username, password);

		const payload = await mutate({
			variables: { password: password, username: username },
		});

		return payload;
	};

	return [createUser, result];
};

export default useCreateUser;
