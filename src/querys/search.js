import {
    gql,
  } from "@apollo/client";

const SearchCharacter = gql`
  query SearchCharacter($nombre: String! ){
    characters(filter: {name:$nombre}) {
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

export default SearchCharacter