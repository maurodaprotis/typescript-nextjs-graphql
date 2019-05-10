import { gql } from "apollo-boost";

export const registerMutation = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      id
      firstName
      lastName
      email
      name
    }
  }
`;
