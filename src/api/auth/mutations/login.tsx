import { gql } from '@apollo/client';

type SigninInput = {
email:string,
password:string
}



export const LOGIN = gql`
mutation Signin($input: SigninInput!) {
    signin(input: $input) {
      authToken
    }
  }
`;