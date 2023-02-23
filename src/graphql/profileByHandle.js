import { gql } from "@apollo/client";

export const PROFILEBYHANDLE = gql`
query getProfileByHandle($handle: String!){
    profileByHandle(handle: $handle) {
      metadataInfo {
        avatar
        bio
      }
      owner {
        address
      }
      isPrimary
    }
  }
`;
