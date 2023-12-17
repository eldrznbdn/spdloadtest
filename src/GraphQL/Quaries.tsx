import { gql } from '@apollo/client';

export const LOAD_USERS = gql`
  query {
    rockets {
      id
      description
      name
    }
  }
`;
