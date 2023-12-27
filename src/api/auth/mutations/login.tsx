import { gql } from '@apollo/client';



export const LOGIN = gql`
mutation Signin($input: SigninInput!) {
    signin(input: $input) {
      authToken
    }
  }
`;