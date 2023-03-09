import { gql } from "@apollo/client";

export const CREATE_LIKE_TYPED_DATA = gql`
  mutation CreateLikeTypedData($input: CreateLikeTypedDataInput!) {
    createLikeTypedData(input: $input) {
      typedData {
        id
        sender
        data
        nonce
      }
    }
  }
`;