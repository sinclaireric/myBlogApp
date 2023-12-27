import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
query Posts($pagination: OffsetPaginationInput) {
  posts(pagination: $pagination) {
    pagination {
      count
      limit
      offset
    }
    data {
      category {
        label
      }
      content {
        type
      }
      image {
        url
      }
      textContent
      publishedAt
      authorV2 {
        ... on MinimalistOrganisme {
          id
          displayName
          avatar {
            url
          }
        }
        ... on MinimalistUser {
          id
          displayName
          nom
          email
          avatar {
            url
          }
        }
      }
    }
  }
}
`;