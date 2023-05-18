import { gql } from "@apollo/client";

import { REPOSITORY_DETAILS, REVIEW } from "./fragments";

export const GET_REPOSITORIES = gql`
	query Repositories(
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
		$searchKeyword: String
		$first: Int
		$after: String
	) {
		repositories(
			orderBy: $orderBy
			orderDirection: $orderDirection
			searchKeyword: $searchKeyword
			first: $first
			after: $after
		) {
			edges {
				node {
					...RepositoryDetails
				}
				cursor
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
	${REPOSITORY_DETAILS}
`;

export const GET_REPOSITORY = gql`
	query Repository($repositoryId: ID!, $first: Int, $after: String) {
		repository(id: $repositoryId) {
			...RepositoryDetails
			url
			reviews(first: $first, after: $after) {
				totalCount
				edges {
					node {
						...ReviewDetails
					}
					cursor
				}
				pageInfo {
					endCursor
					startCursor
					hasNextPage
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
