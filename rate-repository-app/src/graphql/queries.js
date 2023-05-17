import { gql } from "@apollo/client";

import { REPOSITORY_DETAILS, REVIEW } from "./fragments";

export const GET_REPOSITORIES = gql`
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
		) {
			edges {
				node {
					...RepositoryDetails
				}
			}
		}
	}
	${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
	query Repository($repositoryId: ID!) {
		repository(id: $repositoryId) {
			...RepositoryDetails
			url
			reviews {
				edges {
					node {
						...ReviewDetails
					}
				}
			}
		}
	}
	${REPOSITORY_DETAILS}
	${REVIEW}
`;

export const ME = gql`
	query getCurrentUser($includeReviews: Boolean = false) {
		me {
			id
			username
			reviews @include(if: $includeReviews) {
				edges {
					node {
						...ReviewDetails
					}
				}
			}
		}
	}
	${REVIEW}
`;
