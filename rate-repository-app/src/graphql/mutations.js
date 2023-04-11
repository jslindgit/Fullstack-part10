import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
	mutation authenticate($username: String!, $password: String!) {
		authenticate(credentials: { username: "kalle", password: "password" }) {
			accessToken
		}
	}
`;
