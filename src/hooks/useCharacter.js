import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
    }
  }
`;

export const useCharacter = id => {
  const { id: paramId } = useParams();
  return useQuery(GET_CHARACTER, { variables: { id: paramId } });
};
