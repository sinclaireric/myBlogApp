import { gql } from '@apollo/client';

export const GET_ARTICLES = gql`
query Posts($order: Order,$pagination: OffsetPaginationInput) {
  posts(order:$order,pagination: $pagination) {
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
      id
    }
  }
}
`;



export const GET_ARTICLE = gql`
query Post($input: IdentifiedInput!) {
  post(input: $input) {
    authorV2 {
      ... on MinimalistOrganisme {
        displayName
        avatar {
          url
        }
      }
      ... on MinimalistUser {
        displayName
        email
        avatar {
          url
        }
      }
    }
    publishedAt
    textContent
  }
}
`;