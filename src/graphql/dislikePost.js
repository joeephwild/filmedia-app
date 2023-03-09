import { gql } from "@apollo/client";

export const CREATE_DISLIKE_TYPED_DATA = gql`
  mutation CreateDislikeTypedData($input: CreateDislikeTypedDataInput!) {
    createDislikeTypedData(input: $input) {
      typedData {
        id
        sender
        data
        nonce
      }
    }
  }
`;