import { gql } from '@apollo/client';
import { client } from '../constants/graphQlEndpoint';

export const ContentAPI = (str) => {
    return new Promise((resolve, reject) => {
    client
        .query({
            query: gql`
      query {
        contentCards(filter: {limit: 20, keywords: "${str}", types: [PODCAST]}) {
        edges {
        ... on Podcast {
        name
        image {
        ...Image
        }
        categories {
        ...Category
        }
        experts {
        ...Expert
        }
        }
        }

        meta {
        total
        limit
        offset
        }
        }
       }
       fragment Image on Image {
        uri
       }
       fragment Category on Category {
        name
       }
       fragment Expert on Expert {
        firstName
        lastName
        title
        company
       }
    `,
        }).then(data=>resolve(data))
        .catch((error) => {console.log("API error",error)
            reject(error);
          });
})}