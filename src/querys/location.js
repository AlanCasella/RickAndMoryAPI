import {
    gql,
  } from "@apollo/client";

const GetDimension = gql`
query SearchDimension($dimensionId:ID!){
    location(id:$dimensionId){
        name
        type
        dimension
        residents{
          id
          name
          status
          image
        }
      }
  }
`;

export default GetDimension