import {
    gql,
  } from "@apollo/client";

const GetCharacters = gql`
  query {
    characters {
      results {
        id
        name
        status
        species
        image
        location {
          id
          name
          type
          dimension
        }
        episode {
          id
          name
          air_date
        }
      }
    }
  }
`;

export default GetCharacters