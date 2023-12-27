import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
query Me {
    me {
      email
      avatar {
        url
    }
      phone {
        indicatif
        number
      }
      displayName
    }
  }
`;