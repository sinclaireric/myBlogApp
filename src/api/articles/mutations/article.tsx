import { gql } from '@apollo/client';



export const CREATE_ARTICLE = gql`
mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    textContent
  }
}
`;