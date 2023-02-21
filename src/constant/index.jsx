import filmediaAbi from './FilMedia.json'
import profile from './FilProfile.json'
import ticket from './Ticket.json'
import profileNFT from './profileNFT.json'
//export const FiltokenAddress = "0x860171B104AcBC6BD730c30c378a9c7f67c24315";
export const FilMediaAddress = "0x697B463380FC81E513d02230F142db2A6467F96e";
export const FilTokenAddress = "0x9879b5cE891bA5b28BD16BC63E20f54E4840AC98";
export const FilTicketAddress = "0xcEB5d1ddc09CC0517428C4A0bF1Bb55Fe55f3101"
export const  SubscriptionAddress = "0x2445F8bF99B2f0804aD6817E5c4ebc76fFB2Cc2b"
export const FilProfileAddress ="0xa3c1a2C1EB1D69c5D7cDC4d3aA626f8Ed0919C11"

export const FilMediaAbi = filmediaAbi.abi
export const filprofileAbi = profile.abi
export const filTicketAbi = ticket.abi
export const profileNft = profileNFT


/**
 * query
{
  profilesByHandles(handles: ["peng"]) {
    id
    profileID
    handle
    metadataInfo {
      handle
      displayName
      bio
      avatar
      coverImage
      attributes {
        display_type
        trait_type
        value
      } 
      version
    }
    followers {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      } 
      edges {
        node {
          address
          handle
          proof {
            content
            digest
            signature
            signingKey
            signingKeyAuth {
              address
              message
              signature
            } 
            arweaveTxHash
          }
        }
        cursor
      } 
    }
    followerCount
  }
}

 */
