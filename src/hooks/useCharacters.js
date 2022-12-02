import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query {
    characters(page: 2) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        image
      }
    }
  }
`;

export const useCharacters = () => useQuery(GET_CHARACTERS);
