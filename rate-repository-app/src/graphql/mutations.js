import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
	mutation Authenticate($username: String!, $password: String!) {
		authenticate(credentials: { username: $username, password: $password }) {
			accessToken
		}
	}
`;

export const CREATEREVIEW = gql`
	mutation CreateReview(
		$ownerName: String!
		$rating: Int!
		$repositoryName: String!
		$text: String
	) {
		createReview(
			review: {
				ownerName: $ownerName
				rating: $rating
				repositoryName: $repositoryName
				text: $text
			}
		) {
			repositoryId
		}
	}
`;

export const CREATEUSER = gql`
	mutation CreateUser($password: String!, $username: String!) {
		createUser(user: { password: $password, username: $username }) {
			id
		}
	}
`;

export const DELETE_REVIEW = gql`
	mutation DeleteReview($deleteReviewId: ID!) {
		deleteReview(id: $deleteReviewId)
	}
`;
