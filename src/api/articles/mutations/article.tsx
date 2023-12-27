import { gql } from '@apollo/client';



export const CREATE_ARTICLE = gql`
mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    textContent
  }
}
`;


export const DELETE_ARTICLE = gql`
mutation DeletePost($input: IdentifiedInput!) {
  deletePost(input: $input) {
    id
  }
}
`;