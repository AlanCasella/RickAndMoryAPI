import {
    gql,
  } from "@apollo/client";

const GetEpisode = gql`
query SearchCharacter($characterId:ID!){
    episode(id:$characterId){
    id
      name
      air_date
      characters {
        id
        name
        status
        species
        location {
          name
          id
        }
      }
  }
  }
`;

export default GetEpisode